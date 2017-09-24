var express = require('express');
var app = express();
var Task = require('./src/bo/taskcp');

var port = process.env.PORT || 5000;
app.use(express.static('public'));
app.use(express.static('src/views'));
app.use(express.static('src/bo'));
app.use(express.static('src/bo/contructor'));

//VARIABLES DE NAVEGACIÓN
var nav = [{ Link: '/Inicio',Text: 'Inicio'}, {Link: '/Task',Text: 'Task'}];


//ROOT
app.get('/', function (req, res) {
    res.render('index', {
        title: 'Inicio',
        nav:nav
    }
    );
});

app.listen(port, function(err){
    console.log('Running on port:'+ port);
});


// var task1 = new Task({ name: 'name1' });
// var task2 = new Task({ name: 'name2' });
// var task3 = new Task({ name: 'name3' });
// task1.complete();
// task2.save();
// task3.save()