
/*EJEMPLO DIFERENTES MODOS DE CREAR OBJETOS*/

// 1)
//var task ={};

// 2)
//var task = Object.create(Object.prototype);

// 3)var task = new Object();
// task.title ='My task';
// task.descripcion = 'My task description';


var task ={
    title:'Mi titulo',
    description:'Mi descripción'
};

Object.defineProperty(task,'toString',{
    value:function(){
        return this.title +' '+this.description;
    },
    writable:false,
    enumerable:false,
    configurable:false
});

var urgentTask = Object.create(task);
Object.defineProperty(urgentTask,'toString',{
    value: function(){
        return this.title + ' Urgente';
    },
    writable:false,
    enumerable:false,
    configurable:false
});

module.exports = Task;

//console.log(task.toString());
//console.log(urgentTask.toString());