//Biblioteca para definir lo que es un JSON
const bodyParser = require("body-parser");
//Biblioteca para generar las rutas de acuerdo al sistema operativo
const path = require("path")
//Importar la biblioteca express para la creación de servidores
const express = require('express');
const alumnoRoutes = require("./routes/alumno")
const tareaRoutes = require("./routes/tarea")
const grupoRoutes = require("./routes/grupo");
const grupoAlumnoRoutes = require("./routes/grupoAlumno");
const juegoRoutes = require("./routes/juego");

//Traer la conexión de la base de datos
const sequelize = require('./util/database');
//Crear el servidor
const app = express();
app.use(bodyParser.json());
//Para saber interpretar los forms
app.use(bodyParser.urlencoded({extended:true}));
app.use('/alumno',alumnoRoutes);
app.use('/tarea',tareaRoutes);
app.use('/grupo',grupoRoutes);
app.use('/grupoAlumno',grupoAlumnoRoutes);
app.use('/juego',juegoRoutes);



const puerto=8080;
sequelize.sync()
    .then(resultado=>{
        console.log('Conexión exitosa');
        //Lanza el servidor para escuchar peticiones
        app.listen(puerto,()=>console.log("Servidor en línea en el puerto 8080"));
    })
    .catch(error=>console.log(error));


