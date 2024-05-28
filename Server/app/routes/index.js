const express = require('express');
const router = express.Router();
const usersRouter = require('./user'); // Importar subrutas de usuarios

router.use('/users', usersRouter);

module.exports = router; 