const express = require('express');
const router = express.Router();
const usersRouter = require('./user'); // Importar subrutas de usuarios
const productsRouter = require('./product'); // Importar subrutas de productos

router.use('/users', usersRouter);

router.use('/product', productsRouter);

module.exports = router; 