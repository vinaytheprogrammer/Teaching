const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>Rithik</h1>");
});

app.listen(5001, () => {
  console.log("Server is running on port 5001");
});
