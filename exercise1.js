//require http
var http = require('http');

//define a port listen on
var port = 8080;
var hit = 0;

//function to handle all requests //request asks for data, response is the server responding
function handleRequest(request, response) {
	hit++;
	response.end('<h1>It Works!</h1><br><p>' + hit + ' hits counted </p>');
}

//set up the server
var server = http.createServer(handleRequest);

server.listen(port, function(){
	console.log('server is listening on: http://localhost:%s', port);
})