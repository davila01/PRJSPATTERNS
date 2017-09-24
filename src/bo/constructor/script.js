(function(){

    var app = angular.module('taskManager', []);
  
    var taskController = function (Task) {
      var ctrl = this;

      ctrl.tasks = [new Task({name: 'task 1',completed:true}), 
                    new Task({name: 'task 2',completed:false}),
                    new Task({name: 'task 3',completed:true}),
                    new Task({name: 'task 4',completed:true}), 
                    new Task({name: 'task 5',completed:false})
                ];
    };
  
    app.controller('taskCtrl', taskController)

}());