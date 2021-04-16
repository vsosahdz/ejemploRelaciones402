const Sequelize = require('sequelize');
const {applyRelations} = require('./relations');

const sequelize = new Sequelize('relacionesDB402','sa','Password1234$',{
    dialect: 'mssql',
    dialectOptions:{
        options:{
            useUTC:false,
            dateFirst: 1
        }
    },
    define:{
        timestamps: false,
        freezeTableName: true
    }
});

//cargar los modelos
const modelDefiners = [
    require('../models/alumno'),
    require('../models/tarea'),
    require('../models/grupo'),
    require('../models/grupoAlumno')
];

//Vincular el objeto de conexión con los modelos
for(const modelDefiner of modelDefiners){
    modelDefiner(sequelize);
}

//Construir las relaciones
applyRelations(sequelize);

//exportar el elemento de conexión
module.exports = sequelize;
