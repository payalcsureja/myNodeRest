var User= require('../controller/user.controller');

// initialize API Server Endpoints
module.exports = function (routes) {
  routes.get('/users', User.getAll);
  routes.post('/user', User.create);
  routes.post('/users', User.importMany);
	routes.get('/user/:id', User.get);
	routes.put('/user/:id', User.update);
	routes.delete('/user/:id', User.delete);
  routes.delete('/users', User.deleteAll);
}