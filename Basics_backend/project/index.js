let express = require('express');

let app = express();   

app.get('/product/:abc',(req,res)=>{
    res.send("Here This is a product route ");

})



app.listen(3333,()=>{
    console.log("Server started at port 3333");
})