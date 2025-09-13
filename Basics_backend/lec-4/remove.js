let fs = require('fs/promises');

let path = __dirname+'/Users/krishnagopalsharma/Desktop/backend/Basics_backend/lec-4/lec-5';

fs.rmdir(path)
.then(()=>{
    console.log("File removed successfully");
})
.catch((err)=>{
    console.log(err);
})