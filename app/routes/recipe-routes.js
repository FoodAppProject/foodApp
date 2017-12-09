var express = require("express");

var db = require("../models/index");
// var Recipe = require("../controllers/recipe.js");

module.exports = function(app) {
// main page upon - saved button
// post request to post current userId into joined table or post current recipeId?
	// app.post('/api/userRecipes/:userID/:recipeID', function(req, res){
	// 	db.userRecipes.create({
			
	// 		// check if user already has recipe - if not then find the recipe and add the user to recipe
	// 		// 

	// 		// check David's example very similar - if course then add student ID if no course then add course + student ID
	// 	}).then(function(dbRecipe){
	// 		res.json(dbRecipe);
	// 	})
	// });

	app.post('/api/Recipes', function(req, res){
		console.log(req.body);
		db.Recipes.create(req.body).then(function(dbRecipe){
				res.json(dbRecipe)
			}).catch(function(err){
				console.log("Errrr: ", err)
				res.status(500).snd(err)
			})
	})

// userPage
// get request on userPage to get all associated recipes from joined table
	app.get('/api/userRecipes/:id', function(req, res){
		db.userRecipes.findAll({
			where: {
				userID = req.params.userID
			}
		}).then(function(dbRecipe){
			res.json(dbRecipe);
		})
	});

// delete userId associated to unwanted recipe
	app.delete('/api/userRecipes/:id', function(req, res){
		db.userRecipes.destroy({
			where:{
				userID: req.params.userID
			}
		}).then(function(result){
			res.json(result);
		})
	});
}


// ================
db.User
	.findOne({where {id: req.params.id}, include: "UserRecipe"})
	.then(function(user){
		var recipe = user.recipes.find(function(recipe) {
			return recipe.id === req.params.recipeId
		})

		if (recipe) {
			//don't do anything to back end 
			return res.send("Already Added!")
		}

		db.Recipe.findOne({where: {id: req.params.recipeID}})
		.then(function(recipe){
			user.addRecipe(recipe)
		})
	})

