//importar modules
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const express = require('express');
const exhbs = require('express-handlebars');
const path = require('path');

//
const configureRoutes = require('./routes');

const app = express();

app.use(express.urlencoded({ extended: true }))


app.use(express.static('public'));

app.engine('handlebars', exhbs());
app.set('view engine', 'handlebars');

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

    configureRoutes(app, db);

});

//iniciar servidor en el puerto 3000
app.listen(3000, function() {
    console.log('app escucha');
});