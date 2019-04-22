var express = require('express');
var cors = require('cors');

var app = express();

app.use(cors());

// var router = express.Router();

/* GET home page. */
app.get('/', function(req, res, next) {
  res.json([
    {id: 1, username: "somebody"},
    {id: 2, username: "somebody_else"}
  ])
});

module.exports = app;
