let fs = require('fs');
console.log(fs);
// let path="/Users/krishnagopalsharma/Desktop/backend/Basics_backend/Lec_3"+"/data.txt"
let path = __dirname+'/data.txt';
// console.log(__dirname+'/data.txt');
fs.writeFile(path,"start learning node js file system",(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("File written successfully");
    }
});