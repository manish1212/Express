const axios = require('axios');

axios.get('http://localhost:3000')
.then((res)=>{
    console.log("Success", res.data);
})
.catch(e => console.log(e));

const body = {
    hello: "Manish",
    class : "667"
}

axios.post('http://localhost:3000/post-test',body)
.then((res)=>{
    console.log("Success", res.data);
})
.catch(e => console.log(e));
