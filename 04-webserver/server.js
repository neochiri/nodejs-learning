const express = require('express');
const app = express();

app.get('/', function(request, response) {
    let salida = {
        nombre: 'Fernando',
        edad: 32,
        url: request.url
    };

    response.send(salida);
});

app.listen(3000, () => {
    console.log('Listening port 3000');
});