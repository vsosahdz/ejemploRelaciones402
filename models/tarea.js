const Sequelize = require('sequelize');

const Tarea = (sequelize)=>{
    sequelize.define('tarea',{
        //Forma especifica de declarar atributos
        descripcion: Sequelize.STRING,
        dias:{
            default: 1,
            type: Sequelize.INTEGER
        }
    })
};

module.exports = Tarea;