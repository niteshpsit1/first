var path = require('path'),
	fs = require('fs');

module.exports = function(server){
	fs.readdirSync(__dirname).filter(function(file){
		return path.join(__dirname,file) != __filename;
	}).forEach(function(file){
		require('./'+path.basename(file))(server);
	});
};