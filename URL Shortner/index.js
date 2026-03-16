const express=require('express');
const {connectMongoose}=require("./connection")
const URL=require("./models/url")
const app=express();
const urlRoute=require("./routes/url");
app.use(express.json());

connectMongoose("mongodb://127.0.0.1:27017/short-url")
.then(()=>{console.log("Mongo connected")})

app.use("/url",urlRoute)
app.get("/:shortId",async(req,res)=>{
    const shortId=req.params.shortId;
    const entry=await URL.findOneAndUpdate({
        shortId
    },{$push:{
        visitHistory:{timestamp:Date.now()}
    }})
 res.redirect(entry.redirecturl)
})

 

app.listen(8001,()=>{console.log("Server started ")})

