const mongoose = require('mongoose');
const config = require('../config/app.config');

const options = {
    // server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } },
    // replset: { socketOptions: { keepAlive: 1, connectTimeoutMS : 30000 } },
    keepAlive: 1,
    connectTimeoutMS: 30000,
    useMongoClient: true,
  };

mongoose.connect(config.db, options);

const db = mongoose.connection;

db.on("connected", function(ref) {
  console.log("Connected to " + config.db + " DB!");
});

// If the connection throws an error
db.on("error", function(error) {
  console.error('Failed to connect to DB ' + config.db + ' on startup ', error);
});

// When the connection is disconnected
db.on('disconnected', function () {
  console.log('Mongoose default connection to DB :' + config.db + ' disconnected');
});

// process.on('SIGINT', function() {
//   db.close(function () {
//     console.log('Mongoose default connection disconnected through app termination');
//     process.exit(0);
//   });
// });

// db.on('error', function(error) {
//   console.error('Database connection error:', error);
// });

// db.once('open', function callback() {
//     console.log("Connection with database succeeded.");
// });

exports.db = db;
// var database = {
//     url: "3ouojekljs8.mongolab.com:i398948",
//     name: "mydatabase-database",
//     user: "myusername",
//     password: "mypassword",
// };

// var loginCredentials = database.user + ":" + database.password;

//     var db = mongoose;

// db.connect("mongodb://" + loginCredentials + "@" + database.url + "/" + database.name);
