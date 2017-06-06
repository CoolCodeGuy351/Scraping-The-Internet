// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var express = require("express");
var request = require("request");
var cheerio = require("cheerio");
var mongoose = require("mongoose");

var Article = require("./models/Article.js");
var Note = require("./models/Note.js");

var app = express();

// Set the app up with morgan, body-parser, and a static folder
app.use(logger("dev"));
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(express.static("public"));

// Database configuration with mongoose
mongoose.connect("mongodb://localhost/internetScrape");
var db = mongoose.connection;

// Show any mongoose errors
db.on("error", function(error) {
  console.log("Mongoose Error: ", error);
});

// Once logged in to the db through mongoose, log a success message
db.once("open", function() {
  console.log("Mongoose connection successful.");
});


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

app.get("/articles", function(req, res) {
	Article.find({}, function(err, found){
		if (err){
			console.log(err);
		} else {
			console.log(found);
			res.json(found);
		}
	});

});

// A GET request to scrape the echojs website
app.get("/scrape", function(req, res) {
  // First, we grab the body of the html with request
  request("https://techcrunch.com/", function(error, response, html) {
    // Then, we load that into cheerio and save it to $ for a shorthand selector
    var $ = cheerio.load(html);
    // Now, we grab every h2 within an article tag, and do the following:
    $("div.block-content").each(function(i, element) {

      // Save an empty result object
      var result = {};

      // Add the text and href of every link, and save them as properties of the result object
      result.title = $(this).children("h2").text();
      result.text = $(this).children("p").text();

      // Using our Article model, create a new entry
      // This effectively passes the result object to the entry (and the title and link)
      var entry = new Article(result);

      // Now, save that entry to the db
      entry.save(function(err, doc) {
        // Log any errors
        if (err) {
          console.log(err);
        }
        // Or log the doc
        else {
          console.log(doc);
        }
      });

    });
  });
  // Tell the browser that we finished scraping the text
  res.send("Scrape Complete");
});


app.get("/savedArticles", function(req, res) {
	// need to create saved articles into db so they can be renderd to screen
});

app.post('/articles/:id', function(req, res) {

    var note = new Note({
        body: req.body.body
    });


    comment.save(function(err, result) {
        if (err) {
            console.log(err);
        } else {


            Article.findOneAndUpdate({ '_id': req.body.id }, { $push: { 'note': result._id } }, { new: true }, function(err, result) {
                
                if (err) {
                    console.log(err);
                } else {

                    //takes you back to saved results
                    res.redirect('/saved');
                }
            });
        }
    });
});




// Listen on port 3000
app.listen(8050, function() {
  console.log("App running on port 8050!");
});
