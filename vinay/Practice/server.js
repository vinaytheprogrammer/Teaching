const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// GET request to the root URL ("/")
app.get('/', (req, res) => {
    res.send('Hello, GET request received!');
});

// GET request to "/user"
app.get('/user', (req, res) => {
    const sampleUser = {
        id: 1,
        name: 'Coding bits',
        email: 'john.doe@example.com'
    };
    res.json(sampleUser);
});

// POST request to "/user"
app.post('/user', (req, res) => {
    const newUser = req.body; // assuming the request body contains a JSON object with user data
    // Here you can add code to save the user to a database or perform other actions
    res.json({
        message: 'User created successfully!',
        user: newUser
    });
});

// Middleware to handle 404 errors
app.use((req, res) => {
    res.status(404).send('404 Not Found');
});

// Starting the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
