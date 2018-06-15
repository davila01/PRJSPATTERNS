(function(){

    var hospApp = angular.module("hpManager");

    hospApp.factory("egreso",function(EgresoRepository){

        var Egreso =function(data){

            this.Id = data.Id||null;
            this.FOLIO= data.FOLIO||'';
            this.FECHAINGRESO= data.FECHAINGRESO||'';
            this.FECHAEGRESO= data.FECHAEGRESO||'';
            this.DIAS_ESTA= data.DIAS_ESTA||'';
            this.PATERNO= data.PATERNO||'';
            this.MATERNO= data.MATERNO||'';
            this.NOMBRE= data.NOMBRE||'';
            this.EDAD= data.EDAD||'';
            this.TIPOEDAD= data.DES_TIPOEDAD||'';
            this.SEXO= data.DES_SEXO||'';
            this.DERECHOHABIENCIA= data.DES_DERHAB||'';
            this.SPSS= data.SPSS||'';
            this.SPSS_DV= data.SPSS_DV||'';
            this.ENTIDADRESIDENCIA= data.DES_ENTIDADRESIDENCIA||'';
            this.MUNICIPIORESIDENCIA= data.DES_MUNICRESIDENCIA||'';
            this.LOCALIDADRESIDENCIA= data.DES_LOCRESIDENCIA||'';
            this.EXPEDIENTE= data.EXPEDIENTE||'';
            this.CURP= data.CURP||'';
            this.PERTENECEGRUPINDIGENA= data.DES_PERTENECEGRUPINDIGENA||'';
            this.HABLALENINDIGENA= data.DES_HABLALENINDIGENA||'';
            this.TIPOSERVICIO= data.DES_TIPOSERVICIO||'';
            this.SERVICIOINGRESO= data.DES_SERVICIOINGRESO||'';
            this.SERVICIOEGRESO= data.DES_SERVICIOEGRESO||'';
            this.PROCEDENCIA= data.DES_PROCEDENCIA||'';
            this.MOTIVOEGRESO= data.DES_MOTIVOEGRESO|'';
            this.CIEAFECPRIN= data.AFECPRIN||'';
            this.AFECPRIN= data.DES_AFECPRIN||'';
            this.CEDULARESP= data.CEDULARESP||'';
            this.NOMBREMED= data.DES_NOMBREMED||'';
            this.MP= data.MP||'';
            this.CERTIF= data.CERTIF||'';
            this.CIECAUSABAS= data.CAUSABAS||'';
            this.CAUSABAS= data.DES_CAUSABAS||'';
            this.ANIO=data.ANIO||null;
            this.contador =data.contador || null;
            

        };

        Egreso.prototype.save=function(){
            console.log("Guardar egreso no aplica");
        };

        Egreso.prototype.save=function(){
            console.log("Eliminar egreso no aplica");
        };

        Egreso.prototype.getById =function(){
            
            if(this.id !=null & this.ANIO != null){
              return  EgresoRepository.getById(this);
            }
        };
        Egreso.prototype.getAll = function(){

            if(this.ANIO !=null){
                return EgresoRepository.getAll(this);
            }
        };
        Egreso.prototype.getByPage = function(){
            if(this.ANIO!=null & this.contador!=null){
                return EgresoRepository.getByPage(this);
            }
        };
        Egreso.prototype.getByFilter = function(){
            if(this.ANIO!=null & this.contador!=null){
                return EgresoRepository.getByFilter(this);
            }
        }

        return Egreso;
    });

}());