//****  Require the http module
var http = require('http'); 
//****  Fire the CreateServer method from the http module
//****  with the anonymous function as the callback
http.createServer(function (request, response) { 
    response.writeHead(200, {'Content-Type': 'text/plain'}); 
    response.end('Hello World\n'); 
//****  Listen on port 8125 of the ip 127.0.0.1
}).listen(8125, "127.0.0.1"); 
//****  Display a notification that the server has started
console.log('Server running at http://127.0.0.1:8125/');