exports.getPrueba = (req, res)=>{
    //Agregar más funcionalidades
    res.send("Mensaje o cadena de texto")
}

exports.postPrueba = (req, res)=>{
    console.log(req.body);
    res.send("Ha llegado la informacion")
}