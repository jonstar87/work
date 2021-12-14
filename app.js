const express = require ('express');
const path = require('path');

const app = express();

app.listen(3030,() => console.log('Conexión exitosa'));

app.get('/home', function (req, res) { 
    //res.send ('Bienvenidos al sitio 3030');
    res.sendFile(path.join(__dirname, './views/index.html'));
});

app.get('/academy', function (req, res) { 
    res.sendFile(path.join(__dirname, './views/academy.html'));
});

app.get('/blog', function (req, res) { 
    res.sendFile(path.join(__dirname, './views/blog.html'));
});

