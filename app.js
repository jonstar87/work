const express = require ('express');
const app = express();
const path = require('path');
const logMiddleware = require('./middlewares/logMiddleware');
const methodOverride = require('method-override');
const session = require('express-session');
//rutas permitidas

const rutasMain = require ('./routers/main.js');
const rutasUser = require('./routers/users.js');
//Archivos estáticos
app.use (express.static(path.join(__dirname, 'public')));

// Vista ejs
app.set ('view engine', 'ejs');

// para trabajar con post
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//config method override PUT & DELETE
app.use(methodOverride('_method'));
app.use(session({secret:'Secreto!!!'}));
//const logBDMiddleware = require('./middlewares/logBDMiddleware');
app.use(logMiddleware);
app.use('/', rutasMain); 
app.use('/', rutasUser);


// 404

//app.use ((req, res, next) => {res.status(404).render('404');next();});

// Levantar servidor
app.listen(3000,() => console.log('Conexión exitosa para INNOVAMOTION en puerto 3000'));