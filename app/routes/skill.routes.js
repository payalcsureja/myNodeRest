var Skill= require('../controller/skill.controller');

// initialize API Server Endpoints
module.exports = function (routes) {
  routes.get('/skills', Skill.getAll);
  routes.post('/skill', Skill.create);
  routes.post('/skills', Skill.importMany);
	routes.get('/skill/:id', Skill.get);
	routes.put('/skill/:id', Skill.update);
	routes.delete('/skill/:id', Skill.delete);
  routes.delete('/skills', Skill.deleteAll);
}