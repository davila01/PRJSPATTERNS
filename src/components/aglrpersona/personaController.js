
(function(){

    var app = angular.module('coreManager');

    var personaController = function(Persona,$scope){

        var ctrl = this;
        var persona = new Persona({});
        var lspersona = persona.getAll();
        ctrl.personas = lspersona.personas;
        console.log(ctrl.personas);
    };

    app.controller('personaCtrl',personaController);
    
}());