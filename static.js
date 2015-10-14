var fs = require('fs');
var path = require('path');

module.exports = function(request, response) {
	var content_type;

	switch(request.url){
		case '/':
			filename = './views/index.html';
			content_type = 'text/html';
		break;
		case '/cars':
			filename = './views/cars.html';
			content_type = 'text/html';
		break;
		case '/cars/new':
			filename = './views/new.html';
			content_type = 'text/html';
		break;
		case '/cats':
			filename = './views/cats.html';
			content_type = 'text/html';
		break;
		case '/stylesheets/style':
			filename = './stylesheets/style.css';
			content_type = 'text/css';
		break;
		case '/hipster':
			filename = './images/hipster_cat.jpg';
			content_type = 'image/jpg';
		break;
		case '/grumpy':
			filename = './images/grumpy_cat.jpg';
			content_type = 'image/jpg';
		break;
		case '/cool':
			filename = './images/cool_car.jpg';
			content_type = 'image/jpg';
		break;
		case '/smart':
			filename = './images/smart_car.jpg';
			content_type = 'image/jpg';
		break;
		default:
			filename = null;
		break;
	}

	if(filename != null && content_type != 'image/jpg') {
		fs.readFile(filename, 'utf8', function(errors, contents){
			response.writeHead(200, {'Content-Type': content_type});
			response.write(contents);
			response.end();
		});
	}
	else if (content_type === 'image/jpg')
	{
			fs.readFile(filename, function(errors, contents){	
			response.writeHead(200, {'Content-Type': 'image/jpg'});
			response.write(contents);
			response.end();
		});
	}
	else 
	{
		response.writeHead(404);
		response.end('File not found!!!');
	}
}
