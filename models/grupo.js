const Sequelize = require('sequelize');

const Grupo = (sequelize)=>{
    sequelize.define('grupo',{
        //Forma especifica de declarar atributos
        clave:{
            type:Sequelize.STRING,
            allowNull:false,
            primaryKey: true
        },
        //Forma corta de declarar atributos
        descripcion: Sequelize.STRING
    })
};

module.exports = Grupo;