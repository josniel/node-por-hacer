// const argv = require('yargs').argv;
const argv = require('./config/yargs').argv;
const toDo = require('./por-hacer/por-hacer');
const colors = require('colors');
let command = argv._[0];

switch (command) {
    case 'crear':
        let task = toDo.create(argv.description);
        console.log(task);
        break;
    case 'listar':
        let list = toDo.getList();
        list = toDo.listTrue();
        for (let task of list) {
            console.log('=============Por hacer============'.green);
            console.log(task.description);
            console.log('==============Estatus============='.green);
            console.log(task.success);
        }
        break;
    case 'actualizar':
        let updated = toDo.update(argv.description, argv.success);
        console.log(updated);
        break;
    case 'borrar':
        let deleted = toDo.Delete(argv.description);
        console.log(deleted);
        break;
    default:
        console.log('Comando no reconocido');
}