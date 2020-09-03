const restify = require('restify'),
  Logger = require('./helpers/logger'),
  server = restify.createServer();

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.fullResponse());
server.use(restify.plugins.dateParser());
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());
server.use(restify.plugins.requestLogger());

server.listen(process.env.PORT, function (err) {
  var host = server.address().address == '::' ? 'localhost' : server.address().address;
  err ? console.log('Restify-API app error:' + err) : console.log('Restify-API app is running @ ' + host + ':' + process.env.PORT);
});

require('./controllers/routes')(server);

module.exports = server;
