const mongoose = require("mongoose");

const productschema = mongoose.Schema({
    img_gif: {type : String, required : true},
    img: {type : String, required : true},
    rating: {type : Number, required : true},
    title: {type : String, required : true},
    brand: {type : String, required : true},
    discount_price: {type : Number, required : true},
    actual_price: {type : String, required : true},
    discount: {type : String, required : true},
    relevance: {type : Number, required : true},
    delivery: {type : Number, required : true},
    new : {type : Number, required : true},
    ID : {type : Number, required : true},
},
{
    versionKey : false,
})

const Product = mongoose.model("product",productschema);

module.exports = Product;