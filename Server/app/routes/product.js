// routes/products.js
const express = require('express');
const router = express.Router();
const productController = require('../controller/productController');

router.get('/', productController.getAllProducts);
router.post('/', productController.createProduct);

module.exports = router;