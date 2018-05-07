// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var mysql = require("mysql");

// Initialize express and set PORT
var app = express();
var PORT = process.env.PORT || 8080;

// Set body-parser as middleware for express
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Set express-handlebars as view engine for express
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Create connection to mySQL data and then attempt to connect to init
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: ""
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);
});

// Set up static public directories
var directoryPublic = path.join(__dirname, 'public');
app.use(express.static(directoryPublic));

// Set up Routes/Controllers

// Start server and begin to listen on PORT
app.listen(PORT, function() {  
  console.log("Server listening on: http://localhost:" + PORT);
});