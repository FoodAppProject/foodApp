var db = require("../models");
var recipe = require("../controllers/recipe.js");

module.exports = function(app) {
// get random recipe for "no-btn"
	app.get('/api/randomRecipe', function(req, res){
		db.Users.findOne({id: 1}).then(function(dbUser){
			// (id:req.body.userId)
			var tags = dbUser.tags;
			res.json(recipe(tags));
		})
	})
// get current recipe to save for later
	app.get('/api/recipe/:id', function(req, res){
		db.Recipes.findOne({id: req.paras.id}).then(function(dbRecipe){
			res.json(dbRecipe);
		})
	})
// post saved reciped into users profile page
	app.post('/api/users', function(req, res){
		db.Recipe.create({
			// recipe object 
		}).then(function(dbUsers){
			res.json(dbUsers)
		})
	})
// delete uwanted recipes --> create delete buttons --> check burger activity
	app.delete('/api/users/:id', function(req, res){
		db.Recipe.destroy({
			where:{
				id: req.params.id
			}
		}).then(function(dbUsers){
			res.json(dbUsers);
		})
	})
}


//CREATE RECIPE TABLE in carman's schema ......