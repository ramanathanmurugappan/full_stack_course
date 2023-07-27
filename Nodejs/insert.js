const dbConnect=require('./cred');
const insert=async ()=>{
	const db=await dbConnect();
	const r=await db.insertOne({name:"ram",age:20});
	console.log("Inserted");
}
insert();//caling the function