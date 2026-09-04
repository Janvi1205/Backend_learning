const app = require("./src/app");
const db= require("./db/db")

db();


app.listen(3000,()=>{
    console.log("Server is running ")
})







