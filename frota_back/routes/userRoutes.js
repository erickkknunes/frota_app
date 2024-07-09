// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');

router.post('/cadastro', UserController.cadastrarUsuario);
router.post('/login', UserController.loginUsuario);

module.exports = router;
