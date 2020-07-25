'use strict';
const argv = require('./config/yargs').argv;
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar.js');

let comando = argv._[0];
let base = argv.base;
let limite = argv.limite;

switch (comando) {
    case 'listar':
        listarTabla(base, limite)
            .catch((err) => {
               console.log(err);
            });
        break;
    case 'crear':
        crearArchivo(base, limite)
            .then((archivo) => {
                console.log(`Archivo creado: ${archivo}`);
            })
            .catch((err) => {
                console.log(err);
            });
        break;
    default:
        console.log('Comando no encontrado');
}

