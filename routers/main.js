const express = require('express');
const router = express.Router();


//req al controlador
const mainController = require ('../controllers/mainController');

// Rutas que se establecen por main 

router.get('/home', mainController.home);
router.get('/academy', mainController.academy)
router.get('/new', mainController.new)



// Se supone que ya quedo 
module.exports = router;
