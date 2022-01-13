const express = require('express');
const router = express.Router();


//req al controlador
const mainController = require ('../controllers/mainController');

// Rutas que se establecen por main 

router.get('/home', mainController.home);
router.get('/academy', mainController.academy)



// Se supone que ya quedo 
module.exports = router;
