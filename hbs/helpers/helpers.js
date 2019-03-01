const hbs = require('hbs');
//Registrar un helper
hbs.registerHelper('getAnio', () => { return new Date().getFullYear() });

hbs.registerHelper('capitalizar', (texto) => {
    let palabras = texto.split(' ');
    palabras.forEach((p, i) => {
        palabras[i] = p.charAt(0).toUpperCase() + p.slice(1).toLowerCase();
    })
    return palabras.join(' ');
});