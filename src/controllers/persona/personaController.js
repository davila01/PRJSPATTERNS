var Repo = require('./personaRepository');
var Persona = require('./persona');

var PersonaCtrl = function(data){
    this.Persona = new Persona(data);
    this.lsPersona = [];
};

PersonaCtrl.prototype.RetriveAll = function () {
    this.lsPersona=Repo.getAll();
    
};

module.exports = PersonaCtrl;