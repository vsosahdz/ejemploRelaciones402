//Traer el modelo dentro del objeto de conexión
const Tarea =require('../util/database').models.tarea;

exports.postAgregarTarea =(req, res)=>{
    console.log(req.body);
    Tarea.create(req.body)
        .then(resultado=>{
            console.log("Registro exitoso");
            res.send("Registro exitoso");
        })
        .catch(error=>{
            console.log(error);
            res.send("Hubo un problema");
        })
}