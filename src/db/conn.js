require('dotenv').config();
const mongoose = require("mongoose");



mongoose.connect("mongodb+srv://vinita:vinita123@cluster0.buxo3gm.mongodb.net/placement",{
    useNewUrlParser:true,useUnifiedTopology:true
}).then(()=>{
    console.log("connection successfull");
}).catch((e)=>{
    console.log(`no connecton ${e}`);
})