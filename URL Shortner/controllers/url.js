const shortid=require("shortid");
const URL=require('../models/url')


async function generateNewUrl(req,res){
    const shortId=shortid.generate();

    const body=req.body;
    if(!body.url) return res.status(400).json({error:"url req"});
  
    await URL.create({

        shortId:shortId,
        redirecturl:body.url, 
        visitHistory:[]

    })
     return res.json({id:shortId})
   
}

module.exports={
    generateNewUrl
}