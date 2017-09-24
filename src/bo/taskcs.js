(function(){
    var app = angular.modele('taskManager');

    app.factory('Task', function(){
        var Task = function(data){
            this.name = data.name;
            this.completed = data.completed;

        }
        Task.prototype.complete = function(){

            console.log('Completing task:'+ this.name);
            this.complete=true;
        };

        Task.prototype.save =function(){
            console.log('saving Tak:'+this.name);

        };
        return Task;
    });
    
}());