const mongoose = require('mongoose');

async function connectDb(){
    await mongoose.connect("mongodb+srv://janviyadav2802_db_user:bJ8rTEUway2QzX%40@project1.ljxmo5k.mongodb.net/project1") 
   console.log("Connected to db ");
}

module.exports=connectDb