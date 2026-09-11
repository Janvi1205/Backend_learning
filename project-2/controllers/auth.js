const User = require("../model/user");
const bcrypt = require("bcrypt");


const registerUser = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(409).json({
                message: "User with this email already exists"
            });
        }

        const hashedpassword = await bcrypt.hash(password, 12);


        const user=  await User.create({
            name,
            email,
            password:hashedpassword,
            role
        })

        console.log(name, email, password, role);

        res.status(201).json({
            message: "User registered successfully"
        });

    } catch (error) {
    console.log(error);

    res.status(500).json({
        message: "Server error"
    });
}
};

module.exports = { registerUser };