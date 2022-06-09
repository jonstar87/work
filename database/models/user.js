// const { config } = require("../../.sequelizerc");

module.exports = (sequelize, dataTypes) =>{

    let alias = 'User';
    let cols = {
        id: {
            type: dataTypes.INTEGER(5),
            primarykey: true,
            autoIncrement: true
        } ,
        name: {
            type: dataTypes.STRING(30)
        },
        email:{
            type: dataTypes.EMAIL
        } ,
        level: {
            type: dataTypes.INTEGER(5)
        }
    
    };
    
    let config ={
        tableName: "users",
        timestamps: false
    };



    const user = sequelize.define(alias, cols, config);
    return user;


}