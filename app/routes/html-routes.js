
var path = require('path');

var isAuthenticated = require('../config/middleware/isAuthenticated.js');

module.exports = function(app){
	app.get('/', function(req, res){
		if(req.user){
			res.redirect('/users')
		}
		res.sendFile(path.join(__dirname + '/../public/loginPage/login.html'))
	});

	app.get('/recipes', function(req, res){
		if(req.user){
			res.redirect('/users');
		}
		res.sendFile(path.join(__dirname + '/../public/index.html'))
	})

	app.get('/users', isAuthenticated, function(req, res){
		res.sendFile(path.join(__dirname + '/../public/feed.html'))
	});
};