const express = require("express");
const app = express();
const port = 8080;
const result = '<h2>Hello World</h2>';

// Kanika's Simple route
app.get('/apple', (req, res) => {
    res.send("Hello from the Apple route");
});

// Path parameter route
app.get('/fruit/:type', (req, res) => {
    res.send(`You requested information about: ${req.params.type}`);
});

// Multiple path parameters
app.get('/fruit/:type/color/:color', (req, res) => {
    res.send(`You requested information about: ${req.params.type} with color: ${req.params.color}`);
});

// Optional parameters
app.get('/fruit/:type/season/:seasons?', (req, res) => {
    const season = req.params.seasons ? req.params.seasons : 'any season';
    res.send(`You requested information about: ${req.params.type} in ${season}`);
});

// Query parameter route
app.get('/search', (req, res) => {
    res.send(`You searched for: ${req.query.q}`);
});

// Chat route
app.get('/chat', (req, res) => {
    res.send("Hello from the Chat route");
});

app.listen(port, () => {
    console.log(`Kanika's app is listening at port ${port}`);
});
