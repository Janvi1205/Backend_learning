const express= require("express");

const {registerUser,loginUser }=require("../controllers/auth");


const router =express.Router();


router.post("/register",registerUser);//If somebody sends a POST request to /register, run registerUser.
router.post("/login",loginUser)
module.exports=router