const Logger = require('../helpers/logger'),
  logger = new Logger('routes');

module.exports = (server) => {
  logger.info(`Routes Server Center`);
  require('./line')(server);
};
