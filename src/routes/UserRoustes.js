const express = require('express');
const { getUserByIdController } = require('../controllers/UserController');
const { loginController } = require('../controllers/AuthController');
const router = express.Router();

router.get('/:id', getUserByIdController);
router.post('/login', loginController); // Ruta para hacer login

module.exports = router;
