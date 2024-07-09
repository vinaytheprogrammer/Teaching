const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

const items = ['Item 1', 'Item 2', 'Item 3'];

app.get('/', (req, res) => {
    res.render('pages/items', { items: items });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
