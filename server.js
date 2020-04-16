const express = require('express');
const exhbs = require('express-handlebars');

const app = express();

app.engine('handlebars', exhbs());
app.set('view engine', 'handlebars');

//pagina home solo es /
app.get('/', function(req, res) {
    res.render('list');
});

app.listen(3000, function() {
    console.log('app escucha');
});