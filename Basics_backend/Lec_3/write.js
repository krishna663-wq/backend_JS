let fs = require('fs/promises');

let path = __dirname+'/p.txt';

fs.writeFile(path,"start learning node js file system")
.then((data)=>{
    console.log("File written successfully");
})  
.catch((err)=>{
    console.log(err);
})