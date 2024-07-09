const express = require("express");
const app = express();
const path = require("path");
const port = 8000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get('/', (req, res) => {
    let diceVal = Math.floor(Math.random() * 6) + 1;
    res.render("index.ejs", {diceVal});
});

app.listen(port, () => {
    console.log(`listening to port ${port}`);
});


