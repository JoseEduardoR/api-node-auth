const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const verifyToken = require('../middlewares/verifyToken');
const { body } = require('express-validator');
const validateRequest = require('../middlewares/validateRequest');

/**
 * @swagger
 * tags:
 * name: Auth
 * description: Operaciones de autenticación
 */

/**
 * @swagger
 * /register:
 *   post:
 *     summary: Registra un nuevo usuario
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 example: user@example.com
 *               password:
 *                 type: string
 *                 example: 123456
 *     responses:
 *       201:
 *         description: Usuario registrado exitosamente
 *       400:
 *         description: El usuario ya existe
 *       422:
 *         description: Datos inválidos
 */

router.post('/register',[
    body('email').isEmail().withMessage('Email invalido'),
    body('password').isLength({min: 6}).withMessage('Minimo 5 caracteres'),
    validateRequest
], authController.register);

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Inicia sesión con credenciales válidas
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 example: user@example.com
 *               password:
 *                 type: string
 *                 example: 123456
 *     responses:
 *       200:
 *         description: Inicio de sesión exitoso, retorna token
 *       400:
 *         description: Credenciales inválidas
 *       422:
 *         description: Datos faltantes
 */

router.post('/login',[
    body('email').notEmpty().withMessage('Email requerido'),
    body('password').notEmpty().withMessage('Contraseña requerida'),
    validateRequest
], authController.login);

/**
 * @swagger
 * /profile:
 *   get:
 *     summary: Retorna los datos del perfil autenticado
 *     tags: [Auth]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Perfil accedido exitosamente
 *       401:
 *         description: Token inválido o ausente
 */

router.get('/profile', verifyToken, authController.profile);

module.exports = router;