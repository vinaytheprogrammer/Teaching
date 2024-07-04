const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>Kanikaaaaaa</h1>");
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});