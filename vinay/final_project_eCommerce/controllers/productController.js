const Product = require('../models/Product');

exports.addProduct = async (req, res) => {
    try {
        let products = await Product.find({});
        let id;
        if (products.length > 0) {
            let last_product_array = products.slice(-1);
            let last_product = last_product_array[0];
            id = last_product.id + 1;
        } else {
            id = 1;
        }

        const product = new Product({
            id: id,
            name: req.body.name,
            image: req.body.image,
            category: req.body.category,
            new_price: req.body.new_price,
            old_price: req.body.old_price,
        });

        await product.save();
        console.log("Product Saved");

        res.json({
            success: true,
            name: req.body.name,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: "Failed to add product" });
    }
};

exports.removeProduct = async (req, res) => {
    try {
        await Product.findOneAndDelete({ id: req.body.id });
        console.log("Product Removed");
        res.json({
            success: true,
            name: req.body.name
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: "Failed to remove product" });
    }
};

exports.getAllProducts = async (req, res) => {
    try {
        let products = await Product.find({});
        console.log("All Products Fetched");
        res.json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: "Failed to fetch products" });
    }
};

exports.getNewCollections = async (req, res) => {
    try {
        let products = await Product.find({});
        let newcollection = products.slice(1).slice(-8);
        console.log("New Collection Fetched");
        res.json(newcollection);
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: "Failed to fetch new collections" });
    }
};

exports.getPopularInWomen = async (req, res) => {
    try {
        let products = await Product.find({ category: "women" });
        let popular_in_women = products.slice(3, 90);
        console.log("Popular in Women Fetched");
        res.json(popular_in_women);
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: "Failed to fetch popular products in women category" });
    }
};
