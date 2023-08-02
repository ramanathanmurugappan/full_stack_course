const mongodb=require('mongodb');
const dbConnect=require('./mongodb')
const express=require('express');
const app=express();

const insert=async ()=>{
	const db=await dbConnect();
	const r=await db.insertOne({name:"pepsi",hobbies:"vollyball"});
	console.log("Inserted");
    console.warn(r)
}

insert();//caling the function

const update= async () =>{
	let data=await dbConnect();
	let r=await data.updateOne(
		{name:"pepsi"},{$set:{hobbies:"football"}});
	console.log("updated");
    console.warn(r)
}
update();//calling the function