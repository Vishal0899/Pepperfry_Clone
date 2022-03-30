const express = require("express");
const connect = require("./configs/db");

const app = express();

app.use(express.json());

const productcontroller = require("./controllers/products.controller");

app.use("/product",productcontroller);

app.listen(3000, async() =>{
    try{
        await connect();
        console.log("Listening on port 3000");
    }catch(err){
        console.log(err);
    }
})