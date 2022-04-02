const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const User = require("./model/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const JWT_SECRET  = "suhaibgour";
mongoose.connect('mongodb+srv://FastEasyShare:wySonKdpCSoiPrak@cluster0.ukhca.mongodb.net/inshare?retryWrites=true&w=majority');

const app = express();
app.use("/", express.static(path.join(__dirname, 'static')));
app.use(bodyParser.json());

//api 
app.post('/api/register', async(req,res)=>{
    const {name, email, mobile, password:plainTextPassword}= req.body;
    if(!name || typeof name !== 'string'){
        return res.json({status:"Invalid name"});
    }
    const password = await bcrypt.hash(plainTextPassword, 8);
    try{
        const response = await User.create({
            name,
            email,
            mobile,
            password,
        });
        console.log("user created successfully", response);
    }
    catch(err){
        if(err.code === 11000){
            return res.json({status:"error", error:"Username is already in use"});
        }
        throw err;
    }
    res.json({status:'ok'});
});

app.post('/api/login', async (req,res)=>{
    const {email, password} = req.body;
        const user = await User.findOne({email}).lean().exec();
        console.log(user);
        if(!user){
            return res.json({status:"error", error:"User not found"});
        }
        if(await bcrypt.compare(password, user.password)){
            const token = jwt.sign({
                id:user._id,
                email:user.email,
            },JWT_SECRET)
            return res.json({status:"ok", data:token});
        }
    res.json({status:'not ok', error:"Invalid email/password"});
});

app.listen(3000, () => {
    try {
        console.log("Listening on port 3000");
    } catch (err) {
        console.log("error",err);
    }
});