const express = require("express");


const mongoose = require("mongoose");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

//connection
mongoose.connect('mongodb://127.0.0.1:27017/first-app')
    .then(() => console.log("MongoDB connected"))
    .catch(err => { console.log("Error:", err) })



//schema
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true

    },
    lastName: {
        type: String,

    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    jobTitle: {
        type: String
    },

    gender: {
        type: String
    }

},{timestamps:true});


//creation of model 
const User = mongoose.model("users", userSchema)

app.get("/users",async (req, res) => {
    const allDBUser= await User.find({});
    return res.send(allDBUser);

})

app.get("/users/:id", async(req, res) => {
    const user= await User.findById(req.params.id)
    res.json(user)
})  

app.post("/users", async(req, res) => {
    const body = req.body;
    if (
        !body ||
        !body.firstName ||
        !body.lastName ||
        !body.email ||
        !body.gender ||
        !body.jobTitle
    ) {
        return res.status(400).json({ msg: "All fields are required" });
    }
    const result =await User.create({
        firstName:body.firstName,
        lastName:body.lastName,
        email:body.email,
        gender:body.gender,
        jobTitle:body.jobTitle

    })
    console.log(result)

    return res.status(201).json({ msg: "success" })


})


app.listen(8000, () => {
    console.log("Server started")
})


