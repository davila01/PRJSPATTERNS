(function () {

    var app = angular.module('menuManager', []);

    var menuController = function (MenuRepository, Menu) {
        var ctrl = this;

        var lsmenu = MenuRepository.getAll();
        ctrl.menus = lsmenu.menus;
        console.log(ctrl.menus);
    }
    app.controller('menuCtrl', menuController);

}());