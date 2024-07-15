const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let items = [
  { id: 1, name: 'Item 1' },    
  { id: 2, name: 'Item 2' }
];

// Serve the main page
app.get('/', (req, res) => {
  res.render('index', { items });
});

// POST request to create a new item
app.post('/items', (req, res) => {
  const newItem = {
    id: items.length + 1,
    name: req.body.name
  };

  console.log(req.body.name)
  items.push(newItem);
  res.redirect('/');
});

// PATCH request to update an existing item
app.post('/items/:id/update', (req, res) => {
  const item = items.find(i => i.id === parseInt(req.params.id));
  if (item) {
    item.name = req.body.name || item.name;
    res.redirect('/');
  } else {
    res.status(404).send('Item not found');
  }
});

// DELETE request to delete an item
app.post('/items/:id/delete', (req, res) => {
  const itemIndex = items.findIndex(i => i.id === parseInt(req.params.id));
  if (itemIndex !== -1) {
    items.splice(itemIndex, 1);
    res.redirect('/');
  } else {
    res.status(404).send('Item not found');
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
