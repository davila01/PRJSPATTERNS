
(function(){

    var app = angular.module('coreManager', []);

}());


/*
(function () {

    var app = angular.module('coreManager', []);

    var menuController = function (MenuRepository, Menu) {
        var ctrl = this;

        var lsmenu = MenuRepository.getAll();
        ctrl.menus = lsmenu.menus;
        // console.log(ctrl.menus);
    };
    
    var taskController = function (Task, $scope) {
        var ctrl = this;

        ctrl.tasks = [new Task({ name: 'task 1', completed: true }),
        new Task({ name: 'task 2', completed: false }),
        new Task({ name: 'task 3', completed: true }),
        new Task({ name: 'task 4', completed: true }),
        new Task({ name: 'task 5', completed: false,message:'Hello' })
        ];
        $scope.message = 'Hello word';
    };

    app.controller('menuCtrl', menuController);
    app.controller('taskCtrl', taskController);

}());
*/