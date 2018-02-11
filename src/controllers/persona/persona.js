var Repo = require('./personaRepository');

var Persona = function(data){

    this.id = data.id||null,
    this.nombre = data.nombre ||'',
    this.apellido1=data.apellido1||'',
    this.apellido2=data.apellido2||'',
    this.fechanac= data.fechanac|| Date.now(),
    this.sexo =data.sexo||null,
    this.curp = data.curp||'',
    this.edonac = data.edonac||99,
    this.mun=data.mun||999,
    this.loc = data.loc||9999,
    this.estatus =data.estatus||true
};

Persona.prototype.nombreCompleto = function(){
    var nom = this.nombre||''+' '+this.apellido1||''+' '+this.apellido2||'';
    return nom;
};

Persona.prototype.save = function(){
    console.log('saving persona:' + this.nombre);
    Repo.save(this);
};

Persona.prototype.delete = function () {
    console.log('deleting persona:' + this.nombre);
    Repo.delete(this);
};
Persona.prototype.update = function () {
    console.log('updating persona:' + this.nombre);
    Repo.update(this);
};
Persona.prototype.getById = function () {
    if (this.id != null) {
        Repo.getById(this.id);
    }
};

module.exports=Persona;
