var mysql = require('mysql');

var connection = mysql.createConnection({
    port: 3306,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'burgers_db'
});

connection.connect(function (err) {
    if (err) return console.error("Error connection to database: " + err.stack);
    console.log("Connected as id: " + connection.threadId);
})

module.exports = connection;