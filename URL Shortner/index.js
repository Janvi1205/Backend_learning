const express=require('express');
const {connectMongoose}=require("./connection")
const URL=require("./models/url")
const path=require("path")
const app=express();
const urlRoute=require("./routes/url");

const staticrouter=require("./routes/staticrouter")

app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.set("view engine","ejs")
app.set("views",path.resolve("./views"))

connectMongoose("mongodb://127.0.0.1:27017/short-url")
.then(()=>{console.log("Mongo connected")})


app.get("/test",async(req,res)=>{
    const allurls=await URL.find({})
    return res.render("home",{
        urls:allurls

    });
})
app.use("/url",urlRoute)

app.use("/",staticrouter)

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

