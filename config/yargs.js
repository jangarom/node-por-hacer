const descripcion = {
    alias: 'd',
    demand: true,
    desc: "Descripción de la tarea por hacer"
}
const completado = {
    default: true,
    alias: 'c',
    desc: "Marca como completado o pendiente la tarea"
}
const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'borrar una tarea guardada', {
        descripcion
    })
    .help()
    .argv;


module.exports = {
    argv
}