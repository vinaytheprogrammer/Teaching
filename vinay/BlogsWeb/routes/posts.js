const express = require('express');
const router = express.Router();

let posts = [];
let comments = [];

router.get('/', (req, res) => {
    res.render('posts/index', { posts });
});

router.get('/new', (req, res) => {
    res.render('posts/new');
});

router.post('/', (req, res) => {
    const newPost = { id: Date.now(), title: req.body.title, content: req.body.content };
    posts.push(newPost);
    res.redirect('/posts');
});

router.get('/:id', (req, res) => {
    const post = posts.find(p => p.id === parseInt(req.params.id));
    const postComments = comments.filter(c => c.postId === post.id);
    res.render('posts/show', { post, comments: postComments });
});

router.get('/:id/edit', (req, res) => {
    const post = posts.find(p => p.id === parseInt(req.params.id));
    res.render('posts/edit', { post });
});

router.post('/:id', (req, res) => {
    const post = posts.find(p => p.id === parseInt(req.params.id));
    post.title = req.body.title;
    post.content = req.body.content;
    res.redirect('/posts');
});

router.post('/:id/delete', (req, res) => {
    posts = posts.filter(p => p.id !== parseInt(req.params.id));
    comments = comments.filter(c => c.postId !== parseInt(req.params.id));
    res.redirect('/posts');
});

module.exports = router;
