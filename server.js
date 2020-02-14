const express = require('express');
const app = express();

//middleware
app.use(express.json());


app.get('/test1',(req, res)=>{
    res.send("Testing");
})


/**
 * Get with parameters
 */
app.get('/test2',(req, res)=>{
    console.log("Query -> ", req.query);
    res.send(`Hello, ${req.query.hello}`);
    //http://localhost:3000/test2/?hello=Manish
})


/**
 * Post has body and get doesn't
 */
app.post('/post', (req, res)=>{
    console.log("Post -> ", req.body);
    res.send('Worked!!!')
})




/**
 * Default
 */

app.get('*',(req, res)=>{
res.send("DEFAULT DISPLAY");
})

app.listen(3000);