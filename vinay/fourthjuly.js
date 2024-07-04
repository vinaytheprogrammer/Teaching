// Listen for incoming request
// parsing 
// match response with routes
// response

const express = require("express");
const app = express();

// console.dir(app);

let port = 8080;
let result = '<h2>hello world</h2>';

app.get('/', (req, res) => {
    res.send(result)
})


app.listen(port, () => {
    console.log(`app is listening at ${port}`);
})

// app.use((res, req) => {
//     console.log("request received");
// })