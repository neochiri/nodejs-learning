const { crearArchivo } = require('./multiplicar/multiplicar.js');

let base = 7;



crearArchivo(base)
    .then((archivo) => {
        console.log(`Archivo creado: ${archivo}`);
    })
    .catch((err) => {
        console.log(err)
    });