const express= require("express");

const {registerUser}=require("../controllers/auth");

const router =express.Router();

router.post("/register",registerUser);//If somebody sends a POST request to /register, run registerUser.
module.exports=router