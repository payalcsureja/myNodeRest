module.exports = {
  'env': 'heroku',
  'envType': 'prod', // dev/prod
  'debug': true,
  'debugMorganType' : 'dev',
  'secret': 'ilovecoding',
  'sessionId': 'sessionId',
  'db': 'mongodb://mynoderest:mynoderest@ds021333.mlab.com:21333/heroku_clgknqhm', // 'mongodb://heroku_clgknqhm:lcidb9ae7qcvkfjbq0b6jaoet5@ds021333.mlab.com:21333/heroku_clgknqhm',
  'port': 8080
};