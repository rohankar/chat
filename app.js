var express = require('express');

var app = express();

app.get('/', function( req, res){

	res.send('hello from the other side!');
});

app.listen(1337, function(req, res){

	console.log('listining to port 1337')
});