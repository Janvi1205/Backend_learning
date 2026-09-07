const express= require('express');
const multer=require('multer');
const postModel = require('../model/post.model');

const cors = require("cors");
const app= express();
app.use(cors());
app.use(express.json()); //middleware



const upload=multer({storage:multer.memoryStorage()})

app.post("/create-post", upload.none(), async (req, res) => {
    //data came from frontend
    console.log(req.body);

    // Then it is saved in the db (Think of postModel as a tool for working with posts and to save it to db..It can do things like:Create a post,Find posts,Delete post)
    const post =await postModel.create(req.body)
    
    res.send("Post created successfully");
});

app.get("/get-post", async (req, res) => {

    //To find posts, Mongoose provides find()
    const posts = await postModel.find();
    
    //Since posts contains the data, use:
    res.send(posts);

});
module.exports=app;
