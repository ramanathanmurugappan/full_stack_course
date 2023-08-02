const mysql = require("mysql");

const con = mysql.createConnection({
	host: 'localhost',
	user: "root",
	password: "weblink@123",
	database: "mysql"
});

console.warn(con);

con.connect((err) => {
	if(err){
		console.warn("error: " + err.message);
	} else{
		console.warn("connected");
	}
});
