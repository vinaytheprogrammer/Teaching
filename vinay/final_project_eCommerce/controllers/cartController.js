const User = require('../models/User');

exports.addToCart = async (req, res) => {
    try {
        // Fetch the user by ID from the JWT token
        let userData = await User.findOne({ _id: req.user.id });

        // Check if the item exists in the cart and increment its quantity
        if (userData.cartData[req.body.itemId] !== undefined) {
            userData.cartData[req.body.itemId] += 1;
        } else {
            userData.cartData[req.body.itemId] = 1;
        }

        // Update the user's cart data
        await User.findOneAndUpdate({ _id: req.user.id }, { cartData: userData.cartData });

        console.log("Product added to cart");
        res.json({ success: true, message: "Product added to cart" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: "Failed to add product to cart" });
    }
};

exports.removeFromCart = async (req, res) => {
    try {
        // Fetch the user by ID from the JWT token
        let userData = await User.findOne({ _id: req.user.id });

        // Check if the item exists in the cart and decrement its quantity
        if (userData.cartData[req.body.itemId] > 0) {
            userData.cartData[req.body.itemId] -= 1;

            // If the quantity drops to zero, remove the item from the cart
            if (userData.cartData[req.body.itemId] === 0) {
                delete userData.cartData[req.body.itemId];
            }

            // Update the user's cart data
            await User.findOneAndUpdate({ _id: req.user.id }, { cartData: userData.cartData });

            console.log("Product removed from cart");
            res.json({ success: true, message: "Product removed from cart" });
        } else {
            res.status(400).json({ success: false, error: "Product not found in cart or already removed" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: "Failed to remove product from cart" });
    }
};

exports.getCart = async (req, res) => {
    try {
        // Fetch the user by ID from the JWT token
        let userData = await User.findOne({ _id: req.user.id });

        console.log("Cart data retrieved");
        res.json({ success: true, cartData: userData.cartData });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: "Failed to retrieve cart data" });
    }
};
