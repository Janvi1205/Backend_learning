const {z}=require("zod");


const registerSchema=z.object({
    name:z.string().min(2),
    email:z.string().email(),
    password:z.string().min(8),
    role:z.enum(["user","artist"])

})

module.exports = {
    registerSchema
};