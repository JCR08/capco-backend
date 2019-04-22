var express = require('express');
var cors = require('cors');

var app = express();

app.use(cors());

// var router = express.Router();

/* GET home page. */
app.get('/', function(req, res, next) {
  res.json([
    {name: "Mickey", imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d4/Mickey_Mouse.png/220px-Mickey_Mouse.png"},
    {name: "Minnie", imageUrl: "https://i.pinimg.com/originals/58/29/c3/5829c3e6e7437daac35272ab75cae2cc.png"},
    {name: "Donald", imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b4/Donald_Duck.svg/220px-Donald_Duck.svg.png"},
    {name: "Daisy", imageUrl: "https://vignette.wikia.nocookie.net/disney/images/6/67/Daisy_Duck_transparent.png/revision/latest?cb=20160508175748"},
    {name: "Goofy", imageUrl: "https://vignette.wikia.nocookie.net/disney/images/2/27/Goofy_transparent.png/revision/latest?cb=20170426165903"},
    {name: "Pluto", imageUrl: "https://upload.wikimedia.org/wikipedia/en/6/6d/Plutodog.gif"},
    {name: "Clarabelle", imageUrl: "https://upload.wikimedia.org/wikipedia/en/e/ed/Clarabelle_Cow.png"},
    {name: "Horace", imageUrl: "https://upload.wikimedia.org/wikipedia/en/d/d8/Horace_Horsecollar.png"},
    {name: "Pete", imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/9/91/Peg-Leg_Pete.png/220px-Peg-Leg_Pete.png"},
    {name: "Genie", imageUrl: "https://www.disneyclips.com/imagesnewb/images/genie3.png"},
    {name: "Panchito Pistoles", imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/8/8e/Panchito_Pistoles.png/200px-Panchito_Pistoles.png"},
    {name: "Jose Carioca", imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/0/00/Jos%C3%A9_Carioca.png/220px-Jos%C3%A9_Carioca.png"},
    {name: "Launchpad McQuack", imageUrl: "https://vignette.wikia.nocookie.net/disney/images/9/9b/Croppedimage318436-jetmcquackintera.png/revision/latest?cb=20140724152301"},
    {name: "Scrooge McDuck", imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/5/54/Scrooge_McDuck.png/220px-Scrooge_McDuck.png"},
    {name: "Jiminy Cricket", imageUrl: "https://www.disneyclips.com/imagesnewb/images/jiminy-cricket10.png"},
    {name: "Winnie the Pooh", imageUrl: "http://www.stickpng.com/assets/thumbs/5954b848deaf2c03413be33b.png"},
    {name: "Stich", imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d2/Stitch_%28Lilo_%26_Stitch%29.svg/220px-Stitch_%28Lilo_%26_Stitch%29.svg.png"},
    {name: "Mushu", imageUrl: "https://www.disneyclips.com/imagesnewb/images/mushu5.png"}
  ])
});

module.exports = app;
