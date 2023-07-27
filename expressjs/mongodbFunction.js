const { MongoClient }=require('mongodb');
const url="mongodb://127.0.0.1/";
const database='student';
const client=new MongoClient(url);
async function dbConnect(){
	let r=await client.connect();
	db=r.db(database);
	return db.collection('node');
}

dbConnect

const express=require('express');
const app=express();
app.use(express.json());
app.post('/',async(req,resp)=>{
    let d=await dbConnect();
    let r =await d.insertOne(req.body);
    resp.send(r);
});

app.listen(7777);