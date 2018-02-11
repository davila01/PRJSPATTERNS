
var repo = function(){

    var db = {};

    var getId = function(id){
        return{
            name:'new task from db'
        };
    };

    return{

        get: function(id){
            console.log('Getting task'+ id);
            return{
                name:'new task from db'
            };
        },
        save: function(task){
            console.log('Saving '+task.name+' to the db');
        },
        getId:getId
    };
};
module.exports = repo();