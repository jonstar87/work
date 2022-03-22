// const path = require('path');

let mainController = {
    home: (req, res) => {
        res.render('index');
        },
   
    patentes: (req, res) => {
            res.render('patentes');
            },

    marcas: (req, res) => {
            res.render('marcas');
            },  
            
    modelos: (req, res) => {
            res.render('modelos');
            }, 
    designs_es: (req, res) => {
            res.render('designs_es');
            },
    autor: (req, res) => {
           res.render('autor');
                },
    regulatorios: (req, res) => {
            res.render('regulatorios');
            },
            
    academia: (req, res) => {
            res.render('academia');
            },
    blog: (req, res) => {
            res.render('blog');
            },
    consulta: (req, res) => {
        res.render('consulta');
        }

};

module.exports = mainController;
