
(function () {
    
    var app = angular.module('coreManager');
    
        var menuController = function (Menu,$scope) {
            var ctrl = this;
            var menu = new Menu({});
            // console.log(menu.getAll());
            
            var lsmenu = menu.getAll();
            ctrl.menus = lsmenu.menus;
        };
        
        app.controller('menuCtrl', menuController);
    
        

    }());
