// call the packages we need
// const app = require('express')(); // call express and define our app using express
const express        = require('express'); // call express
const app            = express(); // define our app using express
const bodyParser     = require('body-parser'); // parses the body portion of an incoming HTTP request and makes it easier to extract different parts of the contained information
const morgan = require('morgan'); // HTTP request logger middleware for node.js
// const methodOverride = require('method-override');

const config = require('./app/config/app.config'); // looks for app.config.js

const db = require('./app/common/db');

// ROUTES FOR OUR API
const routes = require('./app/routes')(express);

// set our port
const port = process.env.PORT || 8080;  // run PORT=4444 node index.js, Node will use process.env.PORT which equals to 4444 // process.env.PORT from Heroku/...

// configure app to use bodyParser() ,this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));  // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
// app.use(bodyParser.json({type: 'application/vnd.api+json'})); // parse application/vnd.api+json as json
// app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request
app.use(morgan('dev')); // log every request to the console

// REGISTER OUR ROUTES - Connect all our routes to our application
// all of our routes will be prefixed with /api
// Add /v1 for versions
// app.use('/', routes);
app.use('/api', routes);
// app.use('/api', [authenticationMiddlewareFunction], require('./routes/api'));

// START THE SERVER
// =============================================================================
// app.listen(port);
// console.log('Magic happens on port ' + port);
app.listen(port, () => {
  console.log('We are live on ' + port);
});