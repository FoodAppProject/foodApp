var db = require('../models');

module.exports = function(app){
	app.get('/api/users', function(req, res){
		db.Users.findAll({}).then(function(dbUsers){
			res.json(dbUsers);
		});
	});

	app.post('/api/users', function(req, res){
		db.Users.create({
			user_name: req.body.name,
			password: req.body.password,
			email: req.body.email,
			birthday: req.body.birthday
		}).then(function(dbUsers){
			res.json(dbUsers)
		})
	})

	app.delete('/api/users/:id', function(req, res){
		db.Users.destroy({
			where:{
				id: req.params.id
			}
		}).then(function(dbUsers){
			res.json(dbUsers);
		});
	});

	app.put('/api/users', function(req, res){
		db.Users.update({
			//meal preferences
			//mood preferences from modal that pops up when they log in
		})
	})
}