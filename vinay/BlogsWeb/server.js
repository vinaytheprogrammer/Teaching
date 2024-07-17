const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

const userRoutes = require('./routes/users');
const postRoutes = require('./routes/posts');
const commentRoutes = require('./routes/comments');

app.use('/users', userRoutes);
app.use('/posts', postRoutes);
app.use('/posts/:postId/comments', commentRoutes);


app.get('/', (req, res) => {
    res.send('Welcome to my blog!');
});


app.listen(3000, () => {
    console.log('Server started on port 3000');
});
