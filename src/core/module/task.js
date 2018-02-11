var Repo = require('./taskRepository');

var Task = function(data){
    this.name = data.name;
    this.completed = data.completed;
};

Task.prototype.complete = function(){
    console.log('completing task'+ this.name);
    this.complete= true;
};

Task.prototype.save = function(){
    console.log('saving task:'+ this.name);
    Repo.save(this);
};

module.exports = Task;