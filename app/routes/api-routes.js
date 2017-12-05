var db = require('../models/index');

var isAuthenticated = require('../config/middleware/isAuthenticated.js');

module.exports = function(app, passport){

	app.post('/auth/login', passport.authenticate('local'), function(req, res){
		//not sure what this is?
		res.redirect('/')
	});

	app.post('/auth/signup', function(req, res){
		db.Users.create({
			user_name: req.body.name,
			email: req.body.email,
			password: req.body.password,
		}).then(function(){
			res.redirect(307, '/auth/login')
		})
		.catch(function(err){
			res.json(err)
		})
	})

	app.get('/auth/facebook', passport.authenticate('facebook'))

	app.get('/auth/facebook/callback',
		passport.authenticate('facebook', {
			successRedirect: '/',
			failureRedirect: '/'
		})
	)

	app.get('/logout', function(req, res){
		req.logout()
		res.redirect('/')
	})

	app.get('/api/user_data', isAuthenticated, function(req, res){
		res.json({
			user_name: req.user.user_name,
			id: req.user.id,
			user: req.user
		})
	})

	app.put('/api/users', function(req, res){
		db.Users.update({
			where: {
				recipe_info
			}
		})
		.then(function(){
			//need to figure out this function for updating user food preferences...
		})
	})
}

