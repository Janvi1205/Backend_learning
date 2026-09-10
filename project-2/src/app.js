const express=require("express");

const app =express();

app.use(express.json());
const authRouter = require("../routes/app.routes");

app.use("/api/auth", authRouter);//"If the URL starts with /api/auth, send the request to authRouter."

module.exports=app;

