const app=require("./src/app");
require("dotenv").config();
const connectDB = require("./db/db");
connectDB();
app.listen(3000,()=>{
    console.log("server is running");

})