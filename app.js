const express = require ('express');
const path = require('path');

const app = express();

app.listen(3030,() => console.log('Conexión exitosa para INNOVAMOTION'));

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

app.get('/trademarks', function (req, res) { 
    res.sendFile(path.join(__dirname, './views/trademarks.html'));
});
app.get('/industrial-designs', function (req, res) { 
    res.sendFile(path.join(__dirname, './views/designs.html'));
});
app.get('/fredoom-to-operate-search', function (req, res) { 
    res.sendFile(path.join(__dirname, './views/fto.html'));
});
app.get('/patents', function (req, res) { 
    res.sendFile(path.join(__dirname, './views/patents.html'));
});
app.get('/regulatory-affairs', function (req, res) { 
    res.sendFile(path.join(__dirname, './views/regulatory.html'));
});
app.get('/utility-models', function (req, res) { 
    res.sendFile(path.join(__dirname, './views/umodels.html'));
});
