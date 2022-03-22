const express = require('express');
const router = express.Router();


//req al controlador
const mainController = require ('../controllers/mainController');

// Rutas que se establecen por main 

router.get('/home', mainController.home);
router.get('/patentes', mainController.patentes);
router.get('/marcas', mainController.marcas);
router.get('/modelos', mainController.modelos);
router.get('/designs_es', mainController.designs_es);
router.get('/autor', mainController.autor);
router.get('/regulatorios', mainController.regulatorios);
router.get('/academia', mainController.academia);
router.get('/blog', mainController.blog);
router.get('/consulta', mainController.consulta);



// Se supone que ya quedo 
module.exports = router;
