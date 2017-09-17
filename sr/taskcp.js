var Task = function(arg){

    this.name= arg.name;
    this.completed= arg.completed;

    /* SE REDEFINEN LOS METODOS PARA UTILIZAR HERENCIA
    this.complete = function(){
        console.log('completing task:'+this.name);
        this.completed=true;
    }
    this.save = function(){
        console.log('Saving task'+ this.name);
    }*/ 
}

Task.prototype.complete = function(){
    console.log('completing task'+this.name);
    this.complete=true;
};

Task.prototype.save = function(){
    console.log('saving Task'+ this.name);
};

/*
PRUEBA DE LA INFORMACION
var task1 = new Task({name:'name1'});
var task2 = new Task({name:'name2'});
var task3 = new Task({name:'name3'});
task1.complete();
task2.save();
task3.save();*/