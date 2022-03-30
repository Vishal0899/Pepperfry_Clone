const mongoose = require("mongoose");

const connect = () =>{
    return mongoose.connect("mongodb+srv://pepperfryclone:pepperfry123@cluster0.sytkf.mongodb.net/Unit_4_project?retryWrites=true&w=majority");
}

module.exports = connect;