const dbconnect=require('./mongodb')
const express=require('express');
const app=express();
app.use(express.json());
app.delete('/',async(req,resp)=>{
    console.log(req.params.id);
    resp.send('done deletion');
});

app.listen(7777);