var orm = require('../config/orm.js');

var burger = {
    get: function (callback) {
        orm.selectAll('burgers', callback);
    },
    add: function (name, callback) {
        orm.insertOne('burgers', 'name', name, callback);
    },
    update: function (id, isDevoured) {
        orm.updateOne('burgers', 'devoured', isDevoured, 'id', id);
    },
    delete: function (id) {
        orm.deleteOne('burgers', 'id', id);
    }
};