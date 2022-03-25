const { validationResult } = require("express-validator");
const res = require("express/lib/response");

let userController = {
  
    register: (req, res) => {
        res.render('register');
        },

        registro: (req, res) =>{
            res.render('registro');
        },

        registroNuevo: (req, res) =>{
            //res.render('registro');

            //let newUser = req.body;
            //console.log (newUser);
            res.send(req.body);
//            res.redirect('/home');
        },

    nuevo: (req, res) => {
       // res.render('login');
       res.send(req.body);


        },
    login: (req, res) => {
            res.render('login');
            },    
    list: (req, res) => {
        res.render('list');
            },    
    search: (req, res) => {
      res.render('search');
        }, 

    edit: (req, res) => {
        let idUser = req.params.idUser;
        let users = [
            {id:1, name:'Dario'},
            {id:2, name:'Javier'},
            {id:3, name:'Maru'},
            {id:4, name:'Ale'},
            {id:5, name:'Alan'}
        ];

        let userToEdit = users [idUser];
        
        res.send(userToEdit);


        },
    delete: (req, res) => {
            res.render('delete');
            },
            
    session: (req, res) => {

        if (req.session.numeroVisitas == undefined){
            req.session.numeroVisitas = 0;
        }
        req.session.numeroVisitas++;
        res.send('Session tiene el número: ' + req.session.numeroVisitas);
        },
        processlogin: (req, res) => {
            let errors = validationResult (req);
            if(errors.isEmpty()){
// validar errores 
            }else {
                return res.render('login', {errors: errors.errors});
            }
        }
};

module.exports = userController;