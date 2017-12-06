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
	// app.get('/api/recipe/:id', function(req, res){
	// 	db.Recipe.findAll({
	// 		where: {
	// 			userID = req.params.userId
	// 		}
	// 	}).then(function(dbRecipe){
	// 		res.json(dbRecipe);
	// 	})
	// })

// post request to post current userId into joined table or post current recipeId?
	app.post('/api/userRecipe/:id', function(req, res){
		db.Recipe.create({
			where: {
				userID = req.params.userId
			}
		}).then(function(dbRecipe){
			res.json(dbRecipe);
		})
	})
// get request on userPage to get all associated recipes from joined table
	app.get('/api/userRecipe/:id', function(req, res){
		db.Recipe.findAll({
			where: {
				userID = req.params.userId
			}
		}).then(function(dbRecipe){
			res.json(dbRecipe);
		})
	})

// delete userId associated to unwanted recipe
	app.delete('/api/userRecipe/:id', function(req, res){
		db.Recipe.destroy({
			where:{
				userID: req.params.userId
			}
		}).then(function(result){
			res.json(result);
		})
	})
}
