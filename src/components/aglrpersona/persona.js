(function(){

    var app = angular.module('coreManager');

    app.factory('Persona',function(PersonaRepository){

        var Persona = function(data){
            this.id = data.id || null;
            this.nombre = data.nombre||'';
            this.apellido_uno=data.apellido_uno||'';
            this.apellido_dos = data.apellido_dos||'';
            this.sexo = data.sexo||null;
            this.fechanac=data.fechanac||null;
            this.estadonac =data.estadonac||null;
            this.curp = data.curp||'XXXX999999XXXXXX99';
            this.rfc = data.rfc||'XXXX999999XX9';
            this.estatus = data.estatus||true;
            this.estado = data.estado||null;
            this.estadoid=data.estadoid||null;
            this.municipio = data.municipio||null;
            this.municipioid=data.municipioid||null;
            this.localidad = data.localidad ||null;
            this.localidad = data.localidadid || null;
            this.idtexto_uno =data.idtexto_uno||'';
            this.idtexto_dos =data.idtexto_dos||'';
            this.idtexto_tres =data.idtexto_tres||'';
          
        };

        Persona.prototype.save = function(){
            console.log('saving persona:' + this.nombre);
            PersonaRepository.save(this);
        };
        
        Persona.prototype.delete = function () {
            console.log('deleting persona:' + this.name);
            PersonaRepository.delete(this);
        };
        Persona.prototype.update = function () {
            console.log('updating persona:' + this.name);
            PersonaRepository.update(this);
        };
        Persona.prototype.getById = function () {
            if (this.id != null) {
                PersonaRepository.getById(this.id);
            }
        };

        Persona.prototype.getAll = function () {
            if(PersonaRepository!=null){ 
                return PersonaRepository.getAll();
            }
              
        };

        return Persona;
    });

}());