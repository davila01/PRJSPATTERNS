var Repo = require('./menuRepository');
var Menu = require('./menu');

var MenuCtrl = function(data){
    this.Menu = new Menu(data);
    this.lsMenu = [];
};

MenuCtrl.prototype.RetriveAll = function () {
    this.lsMenu=Repo.getAll();
    
};

module.exports = MenuCtrl;