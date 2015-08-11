module.exports = {
	address: 'localhost',
	port: '5000',
	hapiOptions:{
	views: {
	        path: __dirname + '/../views',
	        engines: {
	            jade: require('jade')
	        },
	        compileOptions: {
	            pretty: true
	        },
	        isCached: false
	    }
    }
}