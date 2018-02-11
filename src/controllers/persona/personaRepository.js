var repo = function(){

    var db = process.env.CONSTRING || '';
    //var mongodb = require('mongodb').MongoClient;
    //var objectId = require('mongodb').ObjectID;

    var save = function (persona) {
        console.log('Saving persona db' + this.name);
        return {
            completed: true
        };
    };
    var deletePersona = function (persona) {
        console.log('Deleting persona db' + this.name);
        return {
            completed: true
        };

    };
    var update = function (persona) {
        console.log('Updating persona db' + this.name);
        return {
            completed: true
        };

    };
    var getAll = function () {
        var lspersona = [];

        console.log('getAll persona db');

        return {
            menus: lspersona
        };
    };
    var getById = function (id) {
        var persona = {};
        console.log('getById persona db');
        return {
            persona: persona
        };
    };
    var getByName = function (name) {
        var persona = {};
        console.log('getByName persona db');
        return {
            persona: persona
        };
    };

    return {
        getById: getById,
        getByName: getByName,
        getAll: getAll,
        save: save,
        delete:deletePersona,
        update:update
    };
};

module.exports = repo();