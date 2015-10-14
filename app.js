var http = require('http');
var fs = require('fs');
var path = require('path');
var static_contents = require('./static');


var server = http.createServer(function(request, response) {
	static_contents(request, response);
});

server.listen(7077);
console.log('Running in localhost at port 7077');