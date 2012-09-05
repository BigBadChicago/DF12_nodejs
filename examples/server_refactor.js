//****  Require the http module
var http = require('http');
//****   Create the onRequest function. No longer anonymous.
function onRequest(request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
	response.write('Hello World');
	response.end();
}
//****  createServer function has onRequest as a parameter
http.createServer(onRequest).listen(8125);
