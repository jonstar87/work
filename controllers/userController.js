
let userController = {
  
    register: (req, res) => {
        res.render('register');
        },

    nuevo: (req, res) => {
       // res.render('login');
        res.send('Hola');     

        res.redirect('index');

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
            }  
};

module.exports = userController;