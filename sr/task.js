
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
    writable:true,
    enumerable:true,
    configurable:true
});

console.log(task.toString());