const express=require('express');
const app=express();
app.get("",(req,resp)=>{
    console.log(req.query.name);
    resp.send("welcome to the home page");
});


app.listen(7777);