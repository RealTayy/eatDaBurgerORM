// Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var mysql = require('mysql');
var path = require('path');

// Initialize express and set PORT
var app = express();
var PORT = process.env.PORT || 8080;

// Set body-parser as middleware for express
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Set express-handlebars as view engine for express
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Set up Routes/Controllers
var directoryControllers = path.join(__dirname, 'controllers');
app.use('/', require(path.join(directoryControllers, 'burgers_controller.js')));

// Set up static public directories
var directoryPublic = path.join(__dirname, 'public');
app.use(express.static(directoryPublic));

// Start server and begin to listen on PORT
app.listen(PORT, function () {
  console.log('Server listening on: http://localhost:' + PORT);
});