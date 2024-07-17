const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('List of users');
});

router.post('/', (req, res) => {
  res.send('Create a new user');
});

module.exports = router;
