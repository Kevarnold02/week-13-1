//require http
var http = require('http');

//define a port listen on
var portOne = 7000;
var portTwo = 7500;
var hit = 0;

//function to handle all requests
function handleRequestGood(request, response){
	hit++;
	response.end('<h1>Something good about user</h1><br><p>'+hit+' hits counted</p>');
}

//set up the server
var serverOne = http.createServer(handleRequestGood);

	serverOne.listen(portOne, function(){
		console.log('server listening on: http://localhost:%s', portOne);
})

function handleRequestBad(request, response){
	hit++;1
	response.end('<h1>Something bad about user</h1><br><p>'+hit+' hits counted</p>');
}

var serverTwo = http.createServer(handleRequestBad)
	serverTwo.listen(portTwo, function(){
		console.log('server listening on: http://localhost:%s', portTwo);
	})
