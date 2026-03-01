const express = require("express");
const users=require("./Mock_data.json");
const Port=8000;
const fs=require("fs");

const app= express();
app.use(express.urlencoded({extended:false}))
app.get('/api/users',(req,res)=>{
    return res.send(users)
})

app.get('/users/:id',(req,res)=>{
   const id=Number(req.params.id);
   const user = users.find((user)=>user.id===id);
   return res.json(user);

});

app.post('/api/user',(req,res)=>{
    const body=req.body
     console.log(req.body);
     users.push({...body,id:users.length+1})
     fs.writeFile('./Mock_data.json',JSON.stringify(users),(err,data)=>{
            return res.json({status:"pending"})
     })

   

})

app.listen(Port,()=>console.log("server started"));