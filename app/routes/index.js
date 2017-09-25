// const routes = require('express').Router();

// routes.get('/', function(req, res){
//     // res.status(200).json({ message: 'Connected!' });
//     res.send("Welcome to Node JS V1");
// });

// //modules
// require('./test_routes')(routes);

// //export
// module.exports = routes;

module.exports = function (express) {

    const routes = express.Router();

    routes.get('/', function(req, res){
        // res.status(200).json({ message: 'Connected!' });
        res.send("Welcome to Node JS V1");
    });

    //modules
    require('./test_routes')(routes);
    require('./user.routes')(routes);
    require('./skill.routes')(routes);

    return routes;

}
