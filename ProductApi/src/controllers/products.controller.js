const express = require("express");

const Product = require("../models/products.model");

const router = express.Router();

router.post("",async (req,res) =>{
    try{
        const data = await Product.create(req.body);
        return res.status(201).send(data);
    }catch(err){
       return res.status(500).send({message : err.message});
    }
})

router.get("",async (req,res) =>{
    try{
        const data = await Product.find().lean().exec();
        return res.status(201).send(data);
    }catch(err){
        return res.status(500).send({message : err.message});
    }
})

module.exports = router;