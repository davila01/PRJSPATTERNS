(function () {
      
    var app = angular.module('coreManager');
    
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
    
        
        app.controller('taskCtrl', taskController);
    
    }());