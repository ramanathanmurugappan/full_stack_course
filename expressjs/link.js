const express=require('express');
const app=express();
app.get(" ",(req,resp)=>{
 resp.send(`<a href="/login"> Login </a>`);
});
app.get("/login",(req,resp)=>{
    console.log(req.query.name);
    resp.send(`<html>
    <head>
    </head>
    <body>
        <form>
            <label for="name" >Enter the Name</label>
            <input type="text" placeholder="Enter the Name:-" /><br>
            <label for="password" >Enter Password</label>
            <input type="password" placeholder="Enter your password"/><br>
            <input type="submit"/>
            <input type="reset"/>
        </form>
    </body>
</html>`);
});


app.listen(7777);
