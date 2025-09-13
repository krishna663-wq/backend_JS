let fs = require('fs/promises');

let path = __dirname+'/abc.txt';
fs.appendFile(path,"\n start learning node js file system")
.then(()=>{
    console.log("File written successfully");
})
.catch((err)=>{
    console.log(err);
})