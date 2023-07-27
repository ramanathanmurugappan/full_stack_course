const express=require('express');
const app=express();
app.get("",(req,resp)=>{
    resp.send("welcome to the home page");
});


app.get("/about",(req,resp)=>{
    resp.send("welcome to about page");
});

app.listen(7777);