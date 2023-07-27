var fs=require('fs');
fs.unlink("ram.txt",function(e){
    if (e) throw e;
    console.log("deleted");
});
