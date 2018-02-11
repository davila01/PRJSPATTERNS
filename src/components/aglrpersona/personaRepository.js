(function(){
    var app = angular.module('coreManager');

    var personaRepo=function($http){
        
        var save =function(persona){
            console.log('Saving menu db' + this.name);
            return{
                completed:true
            };
        };

        var deletePersona = function (persona) {
            console.log('Deleting persona db' + this.name);
            return {
                completed: true
            };
        };

        var update = function(persona){
            console.log('Updating persona db'+ this.name);
            return{
                completed:true
            };
        };
        
        var getById = function (persona) {
            var persona = {};
            console.log('getById Persona db');
            return {
                persona: persona
            };
        };
        var getByName = function (name) {
            var persona = {};
            console.log('getByName Menu db');
            return {
                persona: persona
            };
        };

        var getAll = function () {
            var lspersona = null;
            console.log('getAll Personas db');
            return {
                personas: [
                    { id:1,nombre: 'Daniela', apellido_uno:'Avila',apellido_dos:'Fra',sexo:'F',fechanac:Date.now(),curp:'XXXX999999XXXXXX99',rfc:'XXXX999999XX9',estatus:true,estado:'YUCATAN',estadoid:'31',municipio:'MERIDA',municipioid:'3101',localidad:'MERIDA',localidadid:'310101',idtexto_uno:'',idtexto_dos:'',idtexto_tres:'' },
                    { id:2,nombre: 'Dana', apellido_uno:'Avila 1',apellido_dos:'Fra',sexo:'F',fechanac:Date.now(),curp:'XXXX999999XXXXXX99',rfc:'XXXX999999XX9',estatus:false,estado:'YUCATAN',estadoid:'31',municipio:'MERIDA',municipioid:'3101',localidad:'MERIDA',localidadid:'310101',idtexto_uno:'',idtexto_dos:'',idtexto_tres:'' },
                    { id:3,nombre: 'Dana', apellido_uno:'Avila 1',apellido_dos:'Fra',sexo:'F',fechanac:Date.now(),curp:'XXXX999999XXXXXX99',rfc:'XXXX999999XX9',estatus:false,estado:'YUCATAN',estadoid:'31',municipio:'MERIDA',municipioid:'3101',localidad:'MERIDA',localidadid:'310101',idtexto_uno:'',idtexto_dos:'',idtexto_tres:'' },
                    { id:4,nombre: 'Dana', apellido_uno:'Avila 1',apellido_dos:'Fra',sexo:'F',fechanac:Date.now(),curp:'XXXX999999XXXXXX99',rfc:'XXXX999999XX9',estatus:false,estado:'YUCATAN',estadoid:'31',municipio:'MERIDA',municipioid:'3101',localidad:'MERIDA',localidadid:'310101',idtexto_uno:'',idtexto_dos:'',idtexto_tres:'' },
                    { id:5,nombre: 'Dana', apellido_uno:'Avila 1',apellido_dos:'Fra',sexo:'F',fechanac:Date.now(),curp:'XXXX999999XXXXXX99',rfc:'XXXX999999XX9',estatus:false,estado:'YUCATAN',estadoid:'31',municipio:'MERIDA',municipioid:'3101',localidad:'MERIDA',localidadid:'310101',idtexto_uno:'',idtexto_dos:'',idtexto_tres:'' }
                ]
            };
        };

        return{
            save:save,
            deletePersona: deletePersona,
            update:update,
            getById:getById,
            getByName:getByName,
            getAll:getAll
        };
    
    };

    app.service('PersonaRepository',personaRepo);

}());
