const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('List of posts');
});

router.post('/', (req, res) => {
  res.send('Create a new post');
});

module.exports = router;
