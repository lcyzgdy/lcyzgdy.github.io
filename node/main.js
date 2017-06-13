var http = require('http');
var fs = require('fs');
var url = require('url');
var path=require('path');

http.createServer((request, response) => {
	var pathName = url.parse(request.url).pathname;
	console.log("Request for " + pathName + " Received.");
	if(pathName.substr(1)=='') pathName=path.join(pathName, 'index.html');
	console.log("Repair "+pathName);
	fs.readFile(pathName.substr(1), (error, data) => {
		if (error) {
			console.log(error.message);
			response.writeHead(404, { 'Content-Type': 'text/html' });
		}
		else {
			response.writeHead(200, { 'Content-Type': 'text/html' });
			response.write(data);
		}
		response.end();
	});
}).listen(8086);
