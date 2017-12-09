
var path = require('path');

var isAuthenticated = require('../config/middleware/isAuthenticated.js');

var res;

module.exports = function(app){

	app.get('/', function (req, res){
		res.sendFile(path.join(__dirname + '/../public/index.html'))
	})

	app.get('/feed', function(req, res){
		res.sendFile(path.join(__dirname + '/..public/feed.html'))
	})

	app.get('/', function(req, res){
		if(req.user){
			res.redirect('/users')
		}
		res.sendFile(path.join(__dirname + '/../public/index.html'))
	});

	// app.get('/login', function(req, res){
	// 	if(req.user){
	// 		res.redirect('/users');
	// 	}
	// 	res.sendFile(path.join(__dirname + '/../public/index.html'))
	// })

	app.get('/users', isAuthenticated, function(req, res){
		res.sendFile(path.join(__dirname + '/../public/index2.html'))
	});
};