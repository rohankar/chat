var express = require('express');

var app = express();

app.get('/', function( req, res){

	res.render('index');
});

app.listen(1337, function(req, res){

	console.log('listining to port 1337')
});