const Sequelize = require('sequelize');


const GrupoAlumno = (sequelize)=>{
    sequelize.define('grupoAlumno',{
        idGrupoAlumno:{
            type: Sequelize.INTEGER,
            allowNull:false,
            autoIncrement: true,
            primaryKey: true

        },
        estado: Sequelize.STRING
    })
};

module.exports = GrupoAlumno;