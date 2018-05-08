var connection = require('./connection.js');

var orm = {
    selectAll: function (tableOne, callback) {
        connection.query(
            'SELECT * FROM ??',
            [tableOne],
            function (err, result) {
                if (err) throw err;
                if (callback) callback(result);
            }
        );
    },
    insertOne: function (tableOne, colOne, valOne, callback) {
        connection.query(
            'INSERT INTO ?? (??) VALUES (?)',
            [tableOne, colOne, valOne],
            function (err, result) {
                if (err) throw err;
                if (callback) callback(result);
            }
        );
    },
    updateOne: function (tableOne, colOne, valOne, colTwo, valTwo, callback) {
        connection.query(
            'UPDATE ?? SET ?? = ? WHERE ?? = ?',
            [tableOne, colOne, valOne, colTwo, valTwo],
            function (err, result) {
                if (err) throw err;
                if (callback) callback(result);
            }
        )
    }
};

module.exports = orm;   