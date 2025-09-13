let fs = require('fs/promises');

let path = __dirname+'/p.txt';


fs.readFile(path,'utf-8')
    .then(() => {
        console.log("File wriiten successfully");
    }).catch((err) => {
        console.log(err)
    })
    // if(err){
    //     console.log(err);
    // }
    // else{
    //     console.log(data.toString());
    // }
// })