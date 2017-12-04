var db = require("../app/models");

module.exports = function(app) {
// get initial recipe on page to save for later
	app.get('/api/recipe', function(req, res){
		db.Users.findOne({}).then(function(dbUsers){
			res.json(dbUsers)
		})
	})
// post saved reciped into users profile page
	app.post('/api/users', function(req, res){
		db.Users.create({
			// recipe object 
		}).then(function(dbUsers){
			res.json(dbUsers)
		})
	})
// delete uwanted recipes --> create delete buttons --> check burger activity
	app.delete('/api/users/:id', function(req, res){
		db.Users.destroy({
			where:{
				id: req.params.id
			}
		}).then(function(dbUsers){
			res.json(dbUsers);
		})
	})
}