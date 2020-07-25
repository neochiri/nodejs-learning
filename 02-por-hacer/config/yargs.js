'use strict';

const descripcion = {
    demand: true,
    alias: 'd'
};

const completado  = {
    default: true,
    alias: 'c'
};

const argv = require('yargs')
            .command('crear', 'Crea una tarea con la descripción', {
                descripcion
            })
            .command('actualizar', 'Actualiza una tarea', {
                descripcion, completado
            })
            .command('borrar', 'Borra una tarea', {
                descripcion
            })
            .help()
            .argv;

module.exports = {
    argv
}
