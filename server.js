const express = require('express');
const app = express();

//middleware
app.use(express.json());


app.get('/test1',(req, res)=>{
    res.send("Testing");
})
// app.get('/manish',(req, res)=>{
//     console.log("queryww ->", req.query);
//     res.send(`hello, ${req.query.hello}`);
// })
app.get('/test2',(req, res)=>{
    console.log("Query -> ", req.query);
    res.send(`Hello, ${req.query.hello}`);
    //http://localhost:3000/test2/?hello=Manish
})

app.get('*',(req, res)=>{
res.send("This is my first display");
})

app.listen(3000);