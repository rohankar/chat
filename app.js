var express = require('express');

var app = express();

app.get('/', function( req, res){

	res.render('index');
});

app.listen(1337, function(req, res){

	console.log('listining to port 1337')
});


/*var server = require('http').createServer();
var io = require('socket.io')(server);
io.on('connection', function(socket){
  socket.on('event', function(data){});
  socket.on('disconnect', function(){});
});
server.listen(3000);*/