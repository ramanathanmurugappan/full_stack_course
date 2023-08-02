const mysql=require('mysql');
const con=mysql.createConnection({
    host: 'localhost',
	user: "root",
	password: "weblink@123",
	database: "mysql"
});

module.exports=con;