// Import the express module
const express = require("express");

// Create an instance of express
const app = express();

// Middleware to parse URL-encoded data (form data) with the extended option set to true
app.use(express.urlencoded({ extended: true }));

// Middleware to parse JSON data
app.use(express.json());

// Define a GET route at the root path ("/")
app.get("/", (req, res) => {
  // Send an HTML response with a heading
  res.send("<h1>Payal Dabas</h1>");
});

// Start the server and listen on port 8080
app.listen(8080, () => {
  // Log a message to the console indicating the server is running
  console.log("Server is running on port 8080");
});
