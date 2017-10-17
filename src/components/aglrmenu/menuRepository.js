(function(){

    var app = angular.module('menuManager');

    var menuRepo = function ($http) {
        
             // var db = process.env.CONSTRING || '';
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
                    menus: [
                        { id:1,name: 'Menu 1', activated: true,dirlink:'/Menu1',tooltip:'Menu 1',descripcion:'Menu 1',no:1,father:null },
                        { id:1,name: 'Menu 2', activated: true,dirlink:'/Menu1',tooltip:'Menu 1',descripcion:'Menu 1',no:1,father:null }
                    ]
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

        app.service('MenuRepository',menuRepo);
}());