//Función que recibe el objeto de conexión
function applyRelations(sequelize){
    console.log(sequelize.models);
    const Alumno = sequelize.models.alumno;
    const Tarea = sequelize.models.tarea;
    const Grupo = sequelize.models.grupo;
    const GrupoAlumno = sequelize.models.grupoAlumno;

    //Un alumno puede tener muchas tareas
    Alumno.hasMany(Tarea);
    //Una tarea solo puede ser asignada a un alumno
    Tarea.belongsTo(Alumno);

    //Un alumno puede estar en muchas grupos
    Alumno.belongsToMany(Grupo,{through:GrupoAlumno});
    //Un grupo puede tener muchos alumnos
    Grupo.belongsToMany(Alumno,{through:GrupoAlumno});
}

module.exports = {applyRelations};