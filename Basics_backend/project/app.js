let express = require('express');

let app = express();


app.get('/home',(req,res)=>{
    console.log(req);
    res.send("Here This is a home route");
})

app.listen(3002,()=>{
    console.log("Server started at port 3333");
})