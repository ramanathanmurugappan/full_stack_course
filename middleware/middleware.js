const express=require('express');
const app=express();
// const reqFilter=(req,resp,next)=>{
//     if (!req.query.age)
//         resp.send("please provide age");
//     else if(req.query.age<18)
//         resp.send('you are not allowed');
//     else    
//         next();
// }
// app.use(reqFilter);
// app.get("/",(req,resp)=>{
//     resp.send("welcome Ram");
// });

const reqFilter=(req,resp,next)=>{

    if (((req.query.age)%2!=0) || (!req.query.age))
        resp.send("please provide valid age");
    else    
        next();
}
app.use(reqFilter);
app.get("/",(req,resp)=>{
    resp.send("welcome Ram");
});

app.listen(7777);