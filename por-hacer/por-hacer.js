const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () => {

    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo grabar', err);
    })

}

const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }
}

const crear = (descripcion) => {


    cargarDB();

    let porHacer = {
        descripcion,
        completado: false,

    }
    listadoPorHacer.push(porHacer);

    guardarDB();
    return porHacer;
}


const getListado = () => {

    cargarDB();
    return listadoPorHacer;

}

const actualizar = (descripcion, completado = true) => {

    cargarDB();

    //buscar en el arreglo la descripción que la persona esta pasando por parametro
    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    });

    if (index >= 0) {
        // console.log(index);
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }


}

const borrar = (descripcion) => {
    cargarDB();


    let nuevoListado = listadoPorHacer.filter(tarea => {
        return tarea.descripcion != descripcion;
    })

    if (listadoPorHacer.length = nuevoListado.length) {
        return false;
    } else {
        listadoPorHacer = nuevoListado;
        guardarDB();
        return true;
    }

    // let index = listadoPorHacer.findIndex(tarea => {
    //     return tarea.descripcion === descripcion;
    // });

    // if (index >= 0) {
    //     // console.log(index);
    //     listadoPorHacer.pop(index);
    //     guardarDB();
    //     return true;
    // } else {
    //     return false;
    // }
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}