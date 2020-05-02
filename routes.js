const assert = require('assert');

const ObjectId = require('mongodb').ObjectId;

function configureRoutes(app, db) {
    //ruta de la pagina principal
    app.get('/', function(req, res) {
        res.sendFile(path.join(__dirname, '/public/index.html'))
    });

    //Ruta de la tienda, la lista de los productos
    app.get('/store', function(req, res) {
        //var context = { products: products }
        console.log(req.query);

        //si el usuario filtra por female group
        // if (req.query.femaleGroup) {

        // }

        var filters = {

        }

        var sortings = {};

        // Get the documents collection
        const collection = db.collection('products');
        // Find some documents
        collection.find(filters).sort(sortings).toArray(function(err, docs) {
            assert.equal(err, null);

            //crear el contexto
            var context = {
                products: docs,
            }
            console.log(context);
            //renderizar el archivo list.handlebar en el contexto creado
            res.render('list', context);
        });

    });



    //Ruta del producto
    app.get('/products/:name/:id', function(req, res) {
        const filter = { _id: { $eq: new ObjectId(req.params.id) } }
            // Get the documents collection
        const collection = db.collection('products');
        // Find some documents
        collection.find(filter).toArray(function(err, docs) {
            assert.equal(err, null);
            var context = docs[0];


            res.render('product', context);
        });
    });
}

module.exports = configureRoutes;