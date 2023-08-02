const mongodb=require('mongodb');
const dbConnect=require('./mongodb')
const express=require('express');
const app=express();
app.use(express.json());
app.put('/update/:_id', async (req,resp)=>{
    console.log(req.params)
	let data=await dbConnect();
	let r=data.updateOne(
    { _id: req.params._id },
	{
		$set:req.body
	}
	);
	resp.send(r);
} );
app.listen(7777);

