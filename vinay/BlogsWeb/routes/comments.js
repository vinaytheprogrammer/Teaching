const express = require('express');
const router = express.Router();

// Sample posts and comments data (in real scenario, this might come from a database)
let posts = [
    { id: 1, title: 'First Post' },
    { id: 2, title: 'Second Post' }
];

let comments = [];

// Route to render the form for adding a new comment to a post
router.get('/posts/:postId/comments/new', (req, res) => {
    const postId = parseInt(req.params.postId);
    const post = posts.find(post => post.id === postId);
    if (!post) {
        res.status(404).send('Post not found');
        return;
    }
    res.render('posts/comments/new', { post });
});

// Route to handle adding a new comment to a post
router.post('/posts/:postId/comments', (req, res) => {
    const postId = parseInt(req.params.postId);
    const post = posts.find(post => post.id === postId);
    if (!post) {
        res.status(404).send('Post not found');
        return;
    }
    const newComment = { content: req.body.content };
    comments.push(newComment); // In a real scenario, save to database
    res.redirect(`/posts/${postId}`);
});

module.exports = router; // Export the router instance
