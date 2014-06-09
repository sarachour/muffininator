var http = require('http');
var url = require('url')
var fs = require('fs')
var connect = require('connect');

var arguments = process.argv.slice(2);
var puzzleClient = arguments[0];
var puzzleServer = arguments[1];
var msgPath = arguments[2]

var stats = {correct:0, giveup:0, incorrect:0};
var info = {msg:"<unset>"}

fs.readFile(msgPath, 'utf8', function (err,data) {
  if (err) {
    that.message = "<no message>"
  }
  info.msg = data;
  console.log(info);
});

fs.readFile(puzzleServer, 'utf8', function (err,data) {
  if (err) {
    return "";
  }
  eval(data);
});
var returnFile = function(res){
	res.writeHead(200, { 
				"Access-Control-Allow-Origin": "*",
				"Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type,      Accept",
				'Content-Type': 'text/html'
			});
	res.end(info.msg, 'utf-8');
}
var returnError = function(res){
	res.writeHead(200, { 
				"Access-Control-Allow-Origin": "*",
				"Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type,      Accept",
				'Content-Type': 'text/html'
			});

	var error_message = '<b style="color:red;">Incorrect Answer</b>'
	res.end(error_message, 'utf-8');
}
var processRequest = function (req, res) {
  var queryData = url.parse(req.url, true).query;
  var command = queryData.command

  if(command == "puzzle"){
  	console.log("Puzzle requested: "+puzzleClient);
  	fs.readFile(puzzleClient, function(error, content) {
		if (error) {
			res.writeHead(500);
			res.end();
		}
		else {
			res.writeHead(200, { 
				"Access-Control-Allow-Origin": "*",
				"Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type,      Accept",
				'Content-Type': 'text/html'
			});
			res.end(content, 'utf-8');
		}
	});
  }
  else if(command == "giveup"){
  	console.log("Gave Up");
  	stats.giveup += 1;
  	returnFile(res);
  }
  else if(command == "stats"){
  	console.log("get stats");
  }
  else if(command=="check"){
  	 var data =JSON.parse(queryData.data);
  	 if(server.check(data)){
  	 	console.log("returning file");
  	 	returnFile(res);
  	 	stats.correct+=1;
  	 }
  	 else{
  	 	console.log("returning data");
  	 	returnError(res);
  	 	stats.incorrect+=1;
  	 }
  }
  else{
  	console.log("Unknown command.")
  	res.writeHead(200, {'Content-Type': 'text/plain'});
  	res.end("Unknown Command");
  }
}

http.createServer(processRequest).listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/');