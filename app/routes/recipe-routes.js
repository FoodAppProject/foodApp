var express = require("express");

var db = require("../models");
// var Recipe = require("../controllers/recipe.js");

module.exports = function(app) {
// get random recipe for "no-btn"
	app.get('/api/recipes/:tags?', function(req, res){
		var tags = dbUser.tags;

		if (req.params.tags) {
			db.Recipe.findOne({
				where: {
					routeName: req.params.tags
				}
			}).then(function(result){
				return res.json(recipe(tags))
			});
		} 

		else {
			Recipe.findAll({}).then(function(result){
				return res.json(recipe(tags));
			});
		}
	});
// get current recipe to save for later
	app.get('/api/recipe/:id', function(req, res){
		db.Recipe.findAll({
			where: {
				userID = req.params.userID
			}
		}).then(function(dbRecipe){
			res.json(dbRecipe);
		})
	})
// post saved reciped into users profile page
	app.post('/api/users', function(req, res){
		db.Recipe.create({
				// recipe object // check name on sql table
			name: req.body.name,
			image: req.body.imageURL,
			ingredients: req.body.ingredients,
			instructions: req.body.instructions
			userID: req.body.userID
		}).then(function(result){
			res.json(result)
		})
	})
// delete uwanted recipes --> create delete buttons --> check burger activity
	app.delete('/api/users/:id', function(req, res){
		db.Recipe.destroy({
			where:{
				id: req.params.id
			}
		}).then(function(result){
			res.json(result);
		})
	})
}


//CREATE RECIPE TABLE in carman's schema ......