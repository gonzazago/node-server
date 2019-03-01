const http = require('http');

http.createServer((req, res) => {

    res.writeHead(200, { 'Content-Type': 'application/json' });
    let salida = {
        nombre: 'Gonzalo',
        apellido: 'Zago'
    }
    res.write(JSON.stringify(salida));
    //res.write('Hola mundo');
    res.end() //le indico que termina de crear la respuesta
}).listen(8080);

console.log("Escuchando el puerto 8080");