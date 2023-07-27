const dbconnect=require('./mongodb')
const express=require('express');
const app=express();
app.use(express.json());
app.post('/',async(req,resp)=>{
    let d=await dbconnect();
    let r =await d.insertMany(req.body);
    resp.send(r);
});

app.listen(7777);