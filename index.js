var hapi = require('hapi');
var config = require('./config/development.js');

var server = new hapi.Server(config.address,config.port,config.hapiOptions);

require('./routes')(server);

server.start(function(){
	console.log('server running at '+server.info.port);
});