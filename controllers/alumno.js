//Traer el modelo dentro del objeto de conexión
const Sequelize = require('sequelize');
const sequelize = require('../util/database');
const Alumno = sequelize.models.alumno;
const path = require('path');

exports.postAgregarAlumno =(req, res)=>{
    console.log(req.body);
    Alumno.create(req.body)
        .then(resultado=>{
            console.log("Registro exitoso");
            res.send("Registro exitoso");
        })
        .catch(error=>{
            console.log(error);
            res.send("Hubo un problema");
        })
}

exports.getConsultaAlumno=(req, res)=>{
    sequelize.query("SELECT * FROM alumno",{
        type: Sequelize.QueryTypes.SELECT
    }).then(alumnos=>{
        console.log(alumnos);
    })
    .catch(err=>console.log(err))
    res.send("Query ejecutada");
}

exports.getConsultaAlumno2 = (req,res)=>{
    sequelize.query("SELECT * FROM alumno",{
        model:Alumno,
        mapTopModel: true
    }).then(alumnos=>{
        console.log(alumnos)
    }).catch(err=>console.log(err))
};

exports.getGraph = (req,res)=>{
    res.sendFile(path.join(__dirname,'..','views','ejemploGraph.html'));
}