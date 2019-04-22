var express = require('express');
var cors = require('cors');

var app = express();

app.use(cors());

// var router = express.Router();

/* GET home page. */
app.get('/', function(req, res, next) {
  res.json([
    {name: "Mickey", imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d4/Mickey_Mouse.png/220px-Mickey_Mouse.png"},
    {name: "Minnie", imageUrl: "https://cdn.shopify.com/s/files/1/0054/4371/5170/products/FiGPiN_M15_Minnie_Mouse_MICKEY_MOUSE_FRIENDS_PIN-01-01-01_grande.png?v=1539210907"},
  ])
});

module.exports = app;
