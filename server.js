var express = require("express");
var bodyParser = require("body-parser");

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// MySQL DB Connection Information (remember to change this with our specific credentials)
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  //also check port
  user: "root",
  password: "",
  database: "burger"
  //if this doesnt work check to see if it's not "burgers"
});
