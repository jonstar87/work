const express = require('express');
const router = express.Router();
const multer = require ('multer');

//req al controlador
const userController = require ('../controllers/userController');

// Rutas que se establecen por main 
router.get('/register', userController.register);
router.post('/register', userController.nuevo);
router.get('/login', userController.login);
router.get('/list', userController.list);
router.get('/search', userController.search); 
router.get('/edit/:idUser', userController.edit); 
router.get('/delete', userController.delete); 


// Se supone que ya quedo 
module.exports = router;
