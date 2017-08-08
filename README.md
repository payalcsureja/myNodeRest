# myNodeRest

<!--// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
});

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);-->


 <!--"scripts": {
    // https://docs.npmjs.com/misc/scripts
    // "heroku-prebuild": "echo This runs before Heroku installs your dependencies.",
    // "heroku-postbuild": "echo This runs afterwards.",
    // "postinstall": "scripts/postinstall.sh",
    // "postinstall": "if [ $BUILD_ASSETS ]; then npm run build-assets; fi",
    // "build-assets": "bower install && grunt build",
    // "postinstall": "bower install && grunt build",
    // "serve": "nodemon index.js",
    // "dev": "nodemon index.js", // npm run dev
    "start": "nodemon index.js", // "node index.js", // npm run start
    "test": "test" // npm run test
  },-->

  <!--

  1) mongod -dbpath /c/Users/surejap/www/mongodata
  2) npm run serve_windows
  3) npm install
  4) git cmds

  git status
  git add *
  git commit -a -m "security modules for csrf"
  git push
  -->