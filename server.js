var express = require("express");
var bodyParser = require("body-parser");
var path = require("path")

// Sets up the Express App
// =============================================================
var app = express();
var friends = require('./app/data/friends.js')
var htmlRouter = require('./app/routing/htmlRoutes')(app, path);
var apiRouter = require('./app/routing/apiRoutes')(app, friends);


var PORT = process.env.PORT || 3000;
// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  