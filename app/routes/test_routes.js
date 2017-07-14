//initialize
module.exports = function (routes) {
    routes.get('/tests', tests);
    // routes.get('/users', users);
}

//APIs
function tests(req, res) {    
    res.send("Get all tests.");
}

// function users(req, res) {    
//     res.send("Get all users.");
// }