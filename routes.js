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

        //FILTROS
        var filters = {
            $and: []
        };

        //si el usuario filtra por category
        if (req.query.typeG) {
            filters.typeG = {
                $eq: req.query.typeG
            }
        }
        //si el usuario filtra por company
        if (req.query.company) {
            filters.company = {
                $eq: req.query.company
            }
        }
        //si el usuario filtra por date
        if (req.query.date) {
            filters.date = {
                $eq: parseInt(req.query.date)
            }
        }

        //si el usuario hace una busqueda
        if (req.query.search) {
            filters.$and.push({
                miniTitle: {
                    $regex: new RegExp(req.query.search, 'i'),
                },
            })
        }

        if (filters.$and.length === 0) {
            delete filters.$and;
        }
        //ORDENAMIENTOS
        var sortings = {};

        //si el usuario ordena de menor a mayor
        if (req.query.sort == 'price_desc') {
            sortings.price = -1;
        }

        //si el usuario ordena de mayor a menor
        if (req.query.sort == 'price_asc') {
            sortings.price = 1;
        }

        //si el usuario ordena de la A a la Z
        if (req.query.sort == 'name_az') {
            sortings.name = 1;
        }
        // Get the documents collection
        const collection = db.collection('products');
        // Find some documents
        collection.find(filters).sort(sortings).toArray(function(err, docs) {
            assert.equal(err, null);

            //crear el contexto
            var context = {
                    products: docs,
                }
                //console.log(context);
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