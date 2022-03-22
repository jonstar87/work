
let userController = {
  
    register: (req, res) => {
        res.render('register');
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
        res.render('edit');
        },
    delete: (req, res) => {
            res.render('delete');
            }  
};

module.exports = userController;