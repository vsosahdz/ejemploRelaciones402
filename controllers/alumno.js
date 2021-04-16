//Traer el modelo dentro del objeto de conexión
const Alumno =require('../util/database').models.alumno;

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