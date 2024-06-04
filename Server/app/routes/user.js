// routes/users.js
const express = require('express');
const router = express.Router();
const userController = require('../controller/userController'); // Importar el controlador de usuarios

router.get('/', userController.getAllUsers);
router.post('/', userController.createUser);
router.post('/client', userController.addClient);
router.get('/client', userController.getAllClients);
router.post('/login', userController.login);


module.exports = router; //