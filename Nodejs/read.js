const dbConnect=require('./cred');
async function main(){
	let data=await dbConnect();
	data=await data.find({name:"ram"}).toArray();
	console.warn(data);
}
main();