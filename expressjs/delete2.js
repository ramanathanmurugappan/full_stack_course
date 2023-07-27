



const mongodb=require('mongodb');
const dbConnect=require('./mongodb')
const express=require('express');
const app=express();
app.delete("/",async (req,resp)=>{
	const data=await dbConnect();
	const r=await data.deleteOne({_id:new mongodb.ObjectId(req.query.id)});
    console.log(req.query.id)
	console.log(r);
    resp.send('done deletion');
});
app.listen(7777);

