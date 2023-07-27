var http=require("http");
http.createServer(function(req,res){
    res.write("hello ram");
    res.end();
}).listen(7777);