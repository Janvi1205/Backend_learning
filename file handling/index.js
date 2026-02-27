
const fs=require("fs");

// //Sync
// fs.writeFileSync('./text.txt',"Hello there!")

// // //Async 
// fs.writeFile('./text.txt',"Hello",(error)=>{})


 fs.appendFileSync('./text.txt',`${Date.now()}hellothere\n`)

// const r= fs.readFileSync('./text.txt',"utf-8") //for sync thing it returns the value so we can store it in the varibale and clg
// console.log(r);

// fs.readFile('./text.txt',"utf-8",(err,result)=>{  //for async one it will not return anything so we have to explicity make callback function 
//     if(err)
//     {
//         console.log(err);
//     }
//     else{
//         console.log(result);
//     }

// })





