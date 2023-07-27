const fs=require('fs')

console.log("hello")
fs.writeFileSync("ram.txt","hello ramanahtan")

// fs.writeFileSync("index.htm","<html> <body> <h1>hello guys</h1> <h2>hello guys</h2> <h3>hello guys</h3></body> </html>")


// for (i=1;i<=5;i++){
//     fs.writeFileSync("hello"+i+".txt","welcome ram "+i)
// }

// for (i=1;i<=100;i++){
//     fs.writeFileSync("file/hello"+i+".txt","welcome ram "+i)
// }