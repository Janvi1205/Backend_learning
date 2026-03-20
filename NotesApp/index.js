const express= require("express");
const app = express();

app.get("/",(req,res)=>{
    console.log("Welcome to my srver ");
})


app.listen(8000,console.log("server started"));