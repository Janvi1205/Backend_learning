const http = require("http");
const fs= require("fs");
const url=require("url"); //we use this coz this help us in getting all the things about a url 


//how we analise url

const myserver=http.createServer((req,res)=>{ 
    const log=`${Date.now()}:${req.url}New request\n` 
    const myurl=url.parse(req.url,true)   //true will make the parsestring go true
    console.log(myurl) 
    fs.appendFile('./log.txt',log,(err,data)=>{
         switch(myurl.pathname)
         {
            case '/':res.end("Homepage");
            break
            case '/about':
                const username=myurl.query.myname
                 res.end(`My name is${username}`);
            break     
            default: res.end("Welcome to my server")
         }

    })                
   
})

myserver.listen(8000,()=>{console.log("server started")})
