const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Middleware to parse URL-encoded bodies (for POST requests)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

// Render the form page
app.get('/', (req, res) => {
  res.render('index');
});

// Handle GET request form submission
app.get('/get-form', (req, res) => {
  const { username, password } = req.query;
  res.send(`GET request received. Username: ${username}, Password: ${password}`);
});

// Handle POST request form submission
app.post('/post-form', (req, res) => {
  const { username, password } = req.body;
  res.send(`POST request received. Username: ${username}, Password: ${password}`);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
