const express = require('express')
const app = express()
const hbs = require('hbs');
require('./hbs/helpers/helpers')
    // registro directorio donde van a estar
    //las vistas parciales
hbs.registerPartials(__dirname + '/views/partials');

const port = process.env.PORT || 3000;


//levantar un html
//indico que los archivos en el directorio public van a poder ser accedidos
//desde la url por cualquier usuario
app.use(express.static(__dirname + '/public'));



//seteo el motor de vista hbs
app.set('view engine', 'hbs');

app.get('/', function(req, res) {

    //indico que este path va a renderizar la vista home, y los parametros dinamicos
    res.render('home', {
        nombre: 'gOnZaLo SeRgIo ZaGo'
    });
});

app.get('/about', function(req, res) {

    //indico que este path va a renderizar la vista home, y los parametros dinamicos
    res.render('about');
});

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});