const fs = require('fs');

let listToDo = [];
const saveDB = () => {
    let data = JSON.stringify(listToDo);
    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo grabar', err);
        console.log('Los datos se actualizaron correctamente');
    });
}
const loadDB = () => {
    try {
        listToDo = require('../db/data.json');
    } catch (error) {
        listToDo = [];
    }
}
const create = (description) => {
    loadDB();
    let toDo = {
        description,
        success: false
    };
    listToDo.push(toDo);
    saveDB();
    return toDo;
}
const getList = () => {
    loadDB();
    return listToDo;
}
const update = (description, success = true) => {
    loadDB();
    let index = listToDo.findIndex(task => task.description === description);
    if (index >= 0) {
        listToDo[index].success = success;
        saveDB();
        return true
    } else {
        return false;
    }
}
const Delete = (description) => {
    loadDB();
    let index = listToDo.findIndex(task => task.description === description);
    let del = listToDo.splice(index, 1);
    if (index < 0) {
        return ('No se encontro el elemento a borrar');
    } else {
        saveDB();
        return del;
    }

}
const listTrue = () => {
    loadDB();
    let newToDo = listToDo.filter(task => {
        (task.success === false) ? task.success = true: task.success;
    });
    listToDo = newToDo;
    saveDB();
    return ('Todas los por haceres fueron completados');
}
module.exports = {
    create,
    getList,
    update,
    Delete,
    listTrue
}