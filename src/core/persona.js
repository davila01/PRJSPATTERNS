var Persona = function(data){

    this.nombre = data.nombre||'';
    this.apellidopa=data.apellidopa||'';
    this.apellidoma=data.apellidoma||'';
    this.fnacimiento = data.fnacimiento||null;
    this.curp = data.curp||null;
    this.genero=data.genero||null;
    this.nacentidad=data.nactentidad||null;
    this.domentidad=data.domentidad||null;
    this.domlocalidad=data.domlocalidad||null;
    this.dom=data.dom||null;
    this.id = data.id||null;
    this.des_pri= data.des_pri||null;
    this.des_seg=data.des_seg||null;
    this.des_ter=data.des_ter||null;

    this.guardar = function(){

        console.log('Guardar persona'+this.nombre+' '+this.apellidopa+' '+this.appellidoma);
    }
}