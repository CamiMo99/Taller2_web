const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'K-MERCH';

// Create a new MongoClient
const client = new MongoClient(url);

// Use connect method to connect to the Server
client.connect(function(err) {
    assert.equal(null, err);
    console.log("Connected successfully to server");

    const db = client.db(dbName);

    //consultas

    client.close();

});


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