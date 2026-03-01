const http = require("http");
const fs= require("fs");

//how we make server in nodejs 

const myserver=http.createServer((req,res)=>{ //jab bhi koi request ayega client ke taraf se then ye callback func run karega and in req it will have all the info like kon req kr rha,name,ip add etc 
    const log=`${Date.now()}:${req.method}:${req.url}New request\n`     //and then we send thr response in res variable..it can be anything even html
    fs.appendFile('./log.txt',log,(err,data)=>{ //we created a log file jab bhi koi req ayega that will be logged in log.txt
         switch(req.url)
         {
            case '/':res.end("Welcome to my server");
            break
            case '/about': res.end("My name is janvi");
            default: res.end("Welcome to my server")
         }

    })                
   
})

myserver.listen(8001,()=>{console.log("server started")})//this 8000 is the port on which i want to run my server 

//the callback fcuntion written here is optional..that is for me to know if evything is working fine 