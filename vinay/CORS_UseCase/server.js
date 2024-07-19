// server.js
const express = require('express');
const cors = require('cors');

const app = express();

// Without CORS (comment this out to test without CORS)
app.use(cors());

app.get('/api/data', (req, res) => {
  res.json({ message: 'Hello from CodingBits!' });
});

const PORT = process.env.PORT || 5002;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
