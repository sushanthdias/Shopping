import asyncHandler from 'express-async-handler';
import Product from '../models/productModel.js';


// @desc Get Top Rated Products
// @route GET /api/products/top
// @access Public
const getTopProducts = asyncHandler(async (req, res) => {
    const products = await Product.find({}).sort({ rating: -1 }).limit(3);
    res.json(products);
});

export { getTopProducts };