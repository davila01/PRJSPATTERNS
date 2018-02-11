var repoFactory = function () {

    this.getRepo = function (repoType) {
        if (repoType === 'task') {
            //REPOFACTORY WITH CASH
            if (this.taskRepo) {
                return this.taskRepo;
            } else {

                this.taskRepo = require('./taskRepository')();
                return this.taskRepo;
            }
        }
        if (repoType === 'persona') {

            var personaRepo = require('./personaRepository')();
            return personaRepo;
        }
        if (repoType === 'menu') {
            var menuRepo = require('./menuRepository')();
            return menuRepo;
        }
    };
};

module.exports = new repoFactory();