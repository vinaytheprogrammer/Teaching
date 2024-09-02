const express = require('express');
const app = express();
const connectDB = require('./config/db');
const cors = require('cors');

// Connect to the database
connectDB();

// Middleware
app.use(express.json());
app.use(cors());
app.use('/images', express.static('uploads'));

// Routes
app.use('/api/products', require('./routes/productRoutes'));
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/cart', require('./routes/cartRoutes'));

const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
