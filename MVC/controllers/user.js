const User=require("../models/users")

async function handleGetAllUser(req,res) {
    const allDBUser= await User.find({});
    return res.send(allDBUser);

    
}

async function handleUserById(req,res) {
    const user=await User.findById(req.params.id);
    res.json(user);
    
}

async function handleCreatingUser(req,res) {
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


    
}
module.exports={
    handleGetAllUser,
    handleUserById,
    handleCreatingUser

}