const express=require('express');
const app=express();
const con=require("./mysql_conn");
app.use(express.json());

// app.get("/name",(req,resp)=>{
// 	con.query("select * from classes",(err,result)=>{
// 		if(err){
// 			resp.send("error")
// 		}
// 		else{
// 			resp.send(result)
// 		}
// 	});
// })


// app.post("/",(req,resp)=>{
// 	const data={name:"Bhanu",phone:78787};
// 	con.query('INSERT INTO classes set ?',data,(err,r,f)=>{
// 		if(err) err;
// 		resp.send(r);
// 	})
// });

app.put("/",(req,resp)=>{
	const data=[1234,"Bhanu"];
	con.query="update classes set phone=? where name=?",data,(err,r,f)=>{
		if(err) throw console.log(err);
		resp.send(r);

	}
    resp.send('failed');

});



app.listen(7777);