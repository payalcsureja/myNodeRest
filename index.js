// call the packages we need
// const app = require('express')(); // call express and define our app using express
const express        = require('express'); // call express
const app            = express(); // define our app using express
const bodyParser     = require('body-parser'); // parses the body portion of an incoming HTTP request and makes it easier to extract different parts of the contained information

// ROUTES FOR OUR API
const routes = require('./app/routes')(express);

// set our port
const port = process.env.PORT || 8080;  // run PORT=4444 node index.js, Node will use process.env.PORT which equals to 4444 // process.env.PORT from Heroku/...

// configure app to use bodyParser() ,this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

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