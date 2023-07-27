var http=require("http");
var url = require("url");

http.createServer(function(req,res){
    res.writeHead(200,{'content-type':'text/html'});
    var q= url.parse(req.url,true).query;
    var text = q.year+ " " + q.month +" "+q.date;
    res.end(text);
}).listen(7779);

// http://localhost:7779/?year=2020&month=03&date=20