var Task = require('./src/taskcp');

var task1 = new Task({name:'name1'});
var task2 = new Task({name:'name2'});
var task3 = new Task({name:'name3'});
task1.complete();
task2.save();
task3.save()