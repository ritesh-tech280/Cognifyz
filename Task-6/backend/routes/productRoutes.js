const express = require("express")

const router = express.Router()
const Product = require("../models/Products");
const authMiddleware = require("../middleware/authMiddleware");
 

router.get(
    "/",
    authMiddleware,
    async (req, res) => {
        try {
            const products =
                await Product.find({
                    owner:
                    req.user.id
                });
            res.json(products);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
);

router.post(
    "/",
    authMiddleware,
    async (req, res) => {
        try {
            const { name, category, quantity, price } = req.body;
            if (!name || !category || quantity === undefined || price === undefined) {
                return res.status(400).json({ message: "All fields are required" });
            }
            const product = await Product.create({
                name,
                category,
                quantity: Number(quantity),
                price: Number(price),
                owner: req.user.id
            });
            res.status(201).json(product);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
);

router.delete(
    "/:id",
    authMiddleware,
    async (req, res) => {
        try {
            const product = await Product.findOneAndDelete({
                _id: req.params.id,
                owner: req.user.id
            });
            if (!product) {
                return res.status(404).json({ message: "Product not found or unauthorized" });
            }
            res.json({ message: "Product deleted successfully" });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
);

module.exports = router;