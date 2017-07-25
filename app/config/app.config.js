const siteEnv = process.env.ENV || 'prod';
const envConfigPath = '../../app/config/app.config.'+siteEnv;
const config = require(envConfigPath);

module.exports = config;