// routes/products.js
const express = require('express');
const router = express.Router();
const productController = require('../controller/productController');

router.get('/', productController.getAllProducts);
router.post('/register', productController.createProduct);
router.put('/:id', productController.updateProduct);
router.delete('/:id', productController.deleteProduct);

module.exports = router;