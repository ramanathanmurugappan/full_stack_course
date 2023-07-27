var fs=require('fs');
fs.appendFile("ram.txt","hello ram we met again",function(e){
    if (e) throw e;
    console.log("append");
});
