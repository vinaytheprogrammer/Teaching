// Import the express module
const express = require("express");

// Create an instance of express
const app = express();

// Define the port number where the server will listen
let port = 8080;
let result = '<h2>Hello World</h2>';

// Simple route example
app.get('/apple', (req, res) => {
    res.send("Hello from Apple route");
});

// Route with a path parameter
app.get('/fruit/:type', (req, res) => {
    const fruitType = req.params.type;
    res.send(`you requested information about: ${fruitType}`);
});

// Route with multiple path parameters
app.get('/fruit/:type/color/:color', (req, res) => {
    const fruitType = req.params.type;
    const color = req.params.color;
    res.send(`you requested information about: ${fruitType}" with color: ${color}`);
});

// Route with optional parameters
app.get('/fruit/:type/season/:seasons?', (req, res) => {
    const fruitType = req.params.type;
    const season = req.params.season ? req.params.season : 'any season';
    res.send(`you requested information about: ${fruitType} in ${season}`);
});

// Route with a query parameter
app.get('/search', (req, res) => {
    const query = req.query.q;
    res.send(`You searched for: ${query}`);
});

// General chat route
app.get('/chat', (req, res) =>{
    res.send("Hello from Chat route");
});

app.listen(port, () => {
    console.log(`app is listening at ${port}`);
});