// Dependencies
var express = require("express");
var mongojs = require("mongojs");
var bodyParser = require("body-parser");
var logger = require("morgan");
var express = require("express");
var request = require("request");
var cheerio = require("cheerio");

var app = express();

// Set the app up with morgan, body-parser, and a static folder
app.use(logger("dev"));
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(express.static("public"));

// Database configuration
var databaseUrl = "scraper";
var collections = ["items"];

// Hook mongojs config to db variable
var db = mongojs(databaseUrl, collections);

// Log any mongojs errors to console
db.on("error", function(error) {
  console.log("Database Error:", error);
});


// Routes
// ======

// Simple index route
app.get("/", function(req, res) {
	res.send(index.html);
});

app.get("/items", function(req, res) {
	

});






// Listen on port 3000
app.listen(8050, function() {
  console.log("App running on port 8050!");
});
