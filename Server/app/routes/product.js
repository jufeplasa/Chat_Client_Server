const express = require('express');
const router = express.Router();
const productController = require('../controller/productController'); // Importar el controlador de productos

router.get('/', productController.getAllProducts);
router.post('/', productController.createProduct);

module.exports = router;