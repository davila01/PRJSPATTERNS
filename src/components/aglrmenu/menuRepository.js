(function(){

    var app = angular.module('coreManager');

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
                        { id:1,name: 'Index', activated: true,dirlink:'/index.html',tooltip:'Index',descripcion:'Inicio menu',no:1,father:null },
                        { id:2,name: 'Inicio', activated: true,dirlink:'/inicio.html',tooltip:'Inicio',descripcion:'Inicio',no:2,father:null },
                        { id:3,name: 'Persona', activated: true,dirlink:'/persona.html',tooltip:'persona',descripcion:'Persona',no:3,father:null },
                        { id:4,name: 'Task', activated: true,dirlink:'/task.html',tooltip:'Task',descripcion:'Task',no:4,father:null },
                        { id:4,name: 'Nosotros', activated: true,dirlink:'/about.html',tooltip:'Nosotros',descripcion:'Nosotros',no:5,father:null }
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