const express = require('express');
const router = express.Router();
//const multer = require ('multer');

//req al controlador
const userController = require ('../controllers/userController');
//const logDBMiddleware = require('../middlewares/logDBMiddleware');
// Rutas que se establecen por main 
router.get('/register', userController.register);

//validator
const {check} = require ('express-validator');
const validaciones = [
    check('name')
        .notEmpty().withMessage('Debes completar el campo de nombre').bail()
        .isLength({ min: 2, max: 50}).withMessage('Debes poner un nombre de al menos 2 caracteres'),
    check('email')
        .notEmpty().withMessage('Debes completar el email').bail()
        .isEmail().withMessage('Email incorrecto'),
    check('password1')
        .notEmpty().withMessage('Debes completar el campo de password').bail()
        .isLength({ min: 6, max: 12}).withMessage('Debes poner un password de al menos 6 caracteres')

];
//router.post('/register', logDBMiddleware, userController.nuevo);
router.post('/register', validaciones, userController.nuevo);

//router.get('/registro', userController.registro);
//router.post('/registro', userController.registroNuevo);
router.get('/pruebaSession', userController.session);
router.get('/login', userController.login);
router.post('/login', userController.processlogin)
router.get('/list', userController.list);
router.get('/search', userController.search); 
router.get('/edit/:idUser', userController.edit); 
router.get('/delete', userController.delete); 


// Se supone que ya quedo 
module.exports = router;
