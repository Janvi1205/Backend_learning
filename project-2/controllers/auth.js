const User = require("../model/user");
const bcrypt = require("bcrypt");
const { registerSchema } = require("../validators/auth.validator");

const registerUser = async (req, res) => {
    try {
        const result = registerSchema.safeParse(req.body);//ask the zod if it Does this request follow the rules I defined?"
        
        if (!result.success) {                                     //req.body
             return res.status(400).json({                         // ↓
              message: "Invalid registration data",
                errors: result.error.issues                        //Zod safeParse()
                                                                   //  ↓
              });                                                    //valid?
           }                                                          // ↓
                                                                   //result.data
                                                                     //  ↓
                                                                   //use validated data
            
                
        const { name, email, password, role } = result.data;

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(409).json({
                message: "User with this email already exists"
            });
        }

        const hashedpassword = await bcrypt.hash(password, 12);


        const user = await User.create({
            name,
            email,
            password: hashedpassword,
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

const loginUser= async(req,res)=>{

    try{
        const{email,password}=req.body
        console.log(email,password)

        res.status(200).json({
            message:"Login request received"
        })
    }catch(error){
        console.log(error);
        res.status(500).json({
            message:"server error"
        })

    }

}

module.exports = { registerUser,loginUser };