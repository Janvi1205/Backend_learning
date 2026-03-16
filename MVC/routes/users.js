const express=require("express");
const router=express.Router();
const {handleGetAllUser,handleUserById,handleCreatingUser}=require("../controllers/user")

router.get("/",handleGetAllUser)

router.get("/:id", handleUserById) 

router.post("/", handleCreatingUser);
 

module.exports=router;




