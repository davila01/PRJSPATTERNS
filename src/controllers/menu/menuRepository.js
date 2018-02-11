var repo = function () {

    var db = process.env.CONSTRING || '';
    //var mongodb = require('mongodb').MongoClient;
    //var objectId = require('mongodb').ObjectID;

    var save = function (menu) {
        console.log('Saving menu db' + this.name);
        return {
            completed: true
        };
    };
    var deleteMenu = function (menu) {
        console.log('Deleting menu db' + this.name);
        return {
            completed: true
        };

    };
    var update = function (menu) {
        console.log('Updateing Menu db' + this.name);
        return {
            completed: true
        };

    };
    var getAll = function () {
        var lsmenu = null;

        console.log('getAll Menu db');

        return {
            menus: lsmenu
        };
    };
    var getById = function (id) {
        var menu = {};
        console.log('getById Menu db');
        return {
            menu: menu
        };
    };
    var getByName = function (name) {
        var menu = {};
        console.log('getByName Menu db');
        return {
            menu: menu
        };
    };

    return {
        getById: getById,
        getByName: getByName,
        getAll: getAll,
        save: save,
        delete:deleteMenu,
        update:update
    };

};

module.exports = repo();

// var mongodb = require('mongodb').MongoClient;
// var objectId = require('mongodb').ObjectID;

// var personaController = function (personaService, nav) {

//     var middleware = function (req, res, next) {
//         if (!req.user) {
//             res.redirect('/Autenticacion');
//         }
//         next();
//     }
//     var getIndex = function (req, res) {
//         var url =
//             'mongodb://localhost:27017/prnodejs01db';

//         mongodb.connect(url, function (err, db) {
//             var collection = db.collection('Personas');
//             collection.find({}).toArray(
//                 function (err, results) {
//                     res.render('Personas', {
//                         title: 'Personas Catálogo',
//                         nav: nav,
//                         list: ['1a', '2b', '3c'],
//                         personas: results
//                     });

//                 });
//         });
//     }

//     var getById = function (req, res) {

//         var id = new objectId(req.params.id);
//         var url =
//             'mongodb://localhost:27017/prnodejs01db';

//         mongodb.connect(url, function (err, db) {
//             var collection = db.collection('Personas');

//             collection.findOne({ _id: id }, function (err, results) {
//                // console.log(results);
//                 res.render('Dtpersona', {
//                     title: 'Detalles personas',
//                     nav: nav,
//                     list: ['1a', '2b', '3c'],
//                     persona: results
//                 });

//             });
//         });

//     }

//     return {
//         getIndex: getIndex,
//         getById: getById,
//         middleware: middleware
//     };
// };

// module.exports = personaController;