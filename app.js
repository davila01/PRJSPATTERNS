
var express = require('express');
var path = require('path');

var app = express();
var rootPath =path.normalize(__dirname);

var Task = require('./src/core/module/task');
var RepoFactory = require('./src/core/factory/repoFactory');

var port = process.env.PORT;
app.use(express.static('public'));
app.use(express.static('src/views'));

//REVISAR INSTRUCCIONES
app.use(express.static('src/core'));
app.use(express.static('src/components'));
app.use(express.static('src/js'));

//ROOT
app.get('/', function (req, res) {
    res.render('index', {
        title: 'Inicio'
    }
    );
});

app.listen(port, function (err) {
    console.log('Running on port:' + port);
    console.log(process.env.CONSTRING);
});


//var Task = require('./src/core/module/task');
//var Repo = require('./src/core/module/taskRepository');
// var task1 = new Task(Repo.get(1));
// task1.complete();
// var task1 = new Task({ name: 'name1' });
// var task2 = new Task({ name: 'name2' });
// var task3 = new Task({ name: 'name3' });
// task1.complete();
// task2.save();
// task3.save()
//VARIABLES DE NAVEGACIÓN
//var nav = [{ Link: '/Inicio',Text: 'Inicio'}, {Link: '/Task',Text: 'Task'}];
