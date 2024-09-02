const express = require('express');
const router = express.Router();
const { addToCart, removeFromCart, getCart } = require('../controllers/cartController');
const fetchUser = require('../middleware/auth');

router.post('/addtocart', fetchUser, addToCart);
router.post('/removefromcart', fetchUser, removeFromCart);
router.post('/getcart', fetchUser, getCart);

module.exports = router;
