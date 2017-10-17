var Repo = require('./menuRepository');

var Menu = function (data) {
    this.id = data.id || null;
    this.name = data.name || 'Menu';
    this.activated = data.activated || true;
    this.dirlink = data.dirlink || '/';
    this.tooltip = data.tooltip || 'Menu inicio';
    this.description = data.description || 'Menu inicio';
    this.no = data.no || 1;
    this.father = data.Menu || null;
};

Menu.prototype.activate = function () {
    console.log('activating menu option' + this.name);
    this.activated = true;
};
Menu.prototype.save = function () {
    console.log('saving menu:' + this.name);
    Repo.save(this);
};
Menu.prototype.delete = function () {
    console.log('deleting menu:' + this.name);
    Repo.delete(this);
};
Menu.prototype.update = function () {
    console.log('updating menu:' + this.name);
    Repo.update(this);
};
Menu.prototype.getById = function () {
    if (this.id != null) {
        Repo.getById(this.id);
    }
};

module.exports = Menu;