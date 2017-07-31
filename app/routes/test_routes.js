//initialize
module.exports = function (routes) {
    routes.get('/test', test);
    routes.get('/tests', tests);
    // routes.get('/users', users);
}

//APIs
function test(req, res) {
    res.send("Get all test.");
}

function tests(req, res) {
    res.send("Get all tests.");
}

// function users(req, res) {
//     res.send("Get all users.");
// }