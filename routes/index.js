module.exports = function(server){
	server.route({
        method: 'GET',
        path: '/',
        handler: function (req, reply) {
                reply.view('index');
        }
    });
}