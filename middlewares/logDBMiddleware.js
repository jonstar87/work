const fs = require ('fs');

function logDBMiddleware (req, res, next){
    fs.appendFileSync('logDB.txt', 'Se creo un registro al ingresar en la página ' + req.url + "\n");
    next();
}

module.exports = logDBMiddleware;