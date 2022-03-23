const express = require ('express');
const app = express();
const path = require('path');

//Archivos estáticos

app.use (express.static(path.join(__dirname, 'public')));

// Vista ejs

app.set ('view engine', 'ejs');

// para trabajar con post

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//config method override PUT & DELETE

const methodOverride = require('method-override');
app.use(methodOverride('_method'));

//rutas permitidas

const rutasMain = require ('./routers/main.js');
const rutasUser = require('./routers/users.js')

app.use('/', rutasMain); 
app.use('/', rutasUser);

// 404

app.use ((req, res, next) => {
    // res.status(404).render('index'); alternativo
    res.status(404).render('404');
});

// Levantar servidor

app.listen(3000,() => console.log('Conexión exitosa para INNOVAMOTION PORT 3000'));