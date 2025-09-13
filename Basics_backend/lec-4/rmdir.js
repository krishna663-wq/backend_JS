let fs = require('fs/promises');

let path = __dirname+'/lec_5';

fs.rmdir(path)
.then(()=>{
    console.log("File removed successfully");
})
.catch((err)=>{
    console.log(err);
})