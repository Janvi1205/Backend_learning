const http = require("http");
const fs= require("fs");

//how we analise url

const myserver=http.createServer((req,res)=>{ 
    const log=`${Date.now()}:${req.url}New request\n`     
    fs.appendFile('./log.txt',log,(err,data)=>{
         switch(req.url)
         {
            case '/':res.end("Homepage");
            break
            case '/about': res.end("My name is janvi");
            default: res.end("Welcome to my server")
         }

    })                
   
})

myserver.listen(8000,()=>{console.log("server started")})
