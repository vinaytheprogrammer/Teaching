const express = require('express');
const router = express.Router();

let users = [
 
];

router.get('/', (req, res) => {
    res.render('users/index', { users });
});

router.get('/new', (req, res) => {
    res.render('users/new');
});

router.post('/', (req, res) => {
    const newUser = { id: Date.now(), name: req.body.name };
    users.push(newUser);
    res.redirect('/users');
});

router.get('/:id/edit', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    res.render('users/edit', { user });
});

router.post('/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    user.name = req.body.name;
    res.redirect('/users');
});

router.post('/:id/delete', (req, res) => {
    users = users.filter(u => u.id !== parseInt(req.params.id));
    res.redirect('/users');
});

module.exports = router;
