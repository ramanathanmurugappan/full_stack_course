const express=require('express');
const app=express();
app.get("",(req,resp)=>{
    resp.send([
        {
            name:'ram',
            email:'ram@test.com'
        },
        {
            name:'lakshman',
            email:'lakshman@test.com'
        }
    ]);
});


app.listen(7777);