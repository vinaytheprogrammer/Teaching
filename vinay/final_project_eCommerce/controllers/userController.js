const User = require('../models/User');
const jwt = require('jsonwebtoken');

exports.signup = async (req, res) => {
    try {
        // Check if a user with the given email already exists
        let check = await User.findOne({ email: req.body.email });
        if (check) {
            return res.status(400).json({ success: false, errors: "Existing user found with this email address" });
        }

        // Initialize cart data
        let cart = {};
        for (let i = 0; i < 300; i++) {
            cart[i] = 0;
        }

        // Create a new user
        const user = new User({
            name: req.body.username,
            email: req.body.email,
            password: req.body.password,
            cartData: cart,
        });

        await user.save();
        console.log("User Registered");

        // Generate a JWT token
        const data = {
            user: {
                id: user.id
            }
        };
        const token = jwt.sign(data, 'secret_ecom');

        // Respond with the token
        res.json({ success: true, token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: "Failed to register user" });
    }
};

exports.login = async (req, res) => {
    try {
        // Find the user by email
        let user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(400).json({ success: false, error: "Invalid email address" });
        }

        // Compare the password
        const passCompare = req.body.password === user.password;
        if (!passCompare) {
            return res.status(400).json({ success: false, error: "Incorrect password" });
        }

        // Generate a JWT token
        const data = {
            user: {
                id: user.id
            }
        };
        const token = jwt.sign(data, 'secret_ecom');

        // Respond with the token
        res.json({ success: true, token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: "Failed to log in" });
    }
};
