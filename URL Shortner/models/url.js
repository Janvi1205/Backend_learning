const mongoose=require("mongoose");
const { applyTimestamps } = require("../../MVC/models/users");

const URLSchema= new mongoose.Schema({
    shortId:{
        type:String,
        required:true,
        unique:true
    },
    redirecturl:{
       type:String,
       required:true,
    },
    visitHistory:[{timestamp:{type:Number}}]
},{timestamps:true})

const URL=mongoose.model('url',URLSchema);

module.exports=URL;