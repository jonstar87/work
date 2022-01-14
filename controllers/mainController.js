// const path = require('path');

let mainController = {
    home: (req, res) => {
        res.render('index');
        },
    academy: (req, res) => {
        res.render('academy');
        },
    new: (req, res) => {
            res.render('index2');
            }

};

module.exports = mainController;