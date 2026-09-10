const User=require("../model/user")

const registerUser=async(req,res)=>{
    try{
        const {name,email,password,role}=req.body;

        console.log(name,email,password,role);

         res.status(201).json({
            message: "Registration request received"
        });


    }
    catch (error) {
        res.status(500).json({
            message: "Server error"
        });
    }

   
}
 module.exports={registerUser}