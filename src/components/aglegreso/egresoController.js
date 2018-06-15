(function(){

    var app = angular.module('hpManager');

    var egresoController = function(Egreso,$scope){
        
        var ctrl = this;
        var egreso = new Egreso({});
        var lsegreso = egreso.getAll();
        ctrl.egresos = lsegreso.egresos;
        console.log(ctrl.egresos);

    };

    app.controller('egresoCtrl',egresoController);
}());