const Sequelize = require('sequelize');

const Alumno = (sequelize)=>{
    sequelize.define('alumno',{
        idAlumno:{
            type:Sequelize.INTEGER,
            allowNull:false,
            primaryKey:true,
            autoIncrement: true
        },
        nombre:Sequelize.STRING
    })
};

module.exports = Alumno;