const express = require('express');
const exhbs = require('express-handlebars');
const products = require('./products');
const path = require('path');

const app = express();

app.engine('handlebars', exhbs());
app.set('view engine', 'handlebars');

app.use(express.static('public'));

//ruta de la pagina principal
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/public/index.html'))
});

//Ruta de la tienda, la lista de los productos
app.get('/store', function(req, res) {
    var context = { products: products, }
    res.render('list', context);
});

//Ruta del producto
app.get('/products/:name/:id', function(req, res) {
    var id = parseInt(req.params.id);
    var produ = products[id];

    res.render('product', produ);
});

app.listen(3000, function() {
    console.log('app escucha');
});