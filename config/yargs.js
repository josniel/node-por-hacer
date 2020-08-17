const description = {
    demand: true,
    alias: 'd'
}
const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea'
}
const argv = require('yargs')
    .command('crear', 'Crea un elemento por hacer', {
        description
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        description,
        completado
    })
    .command('listar', 'Lista todas las tareas por hacer y con la bandera -c todas se marcan completadas', {
        completado
    })
    .command('borrar', 'Borrar una tarea', {
        description
    })
    .help()
    .argv;
module.exports = {
    argv
}