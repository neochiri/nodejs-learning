"use strict";

const fs = require('fs');

let listarTabla = (base, limite = 10) => {
    return new Promise(((resolve, reject) => {
        if(!Number(base) || !Number(limite)){
            reject('La base o el límite no es un número');
            return;
        }
        for(let i=1;i<=limite;i++){
            console.log(`${base} * ${i} = ${base*i} \n`);
        }
        resolve();
    }));

};

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if(!Number(base) || !Number(limite)){
            reject('La base o el límite no es un número');
            return;
        }
        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err);
            else resolve(`tabla-${base}.txt`);
        });
    });
};

module.exports = {
    crearArchivo,
    listarTabla
};