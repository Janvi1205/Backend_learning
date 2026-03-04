const express = require("express");
const UserRouter=require("./routes/users")

const {connectMongoDb}=require("./connection");
const{logReqRes}=require('./middleware/index')

const app = express();
app.use(express.json());

//middleware
app.use(express.urlencoded({ extended: false }))
app.use(logReqRes("log.txt"))

//connection
connectMongoDb('mongodb://127.0.0.1:27017/first-app').then(()=>{
    console.log("Connected");
})




//Routes
app.use('/users',UserRouter); //means agr user ke upar koi req ayegi toh UserROUTER USE KRNA


app.listen(8000, () => {
    console.log("Server started")
})


