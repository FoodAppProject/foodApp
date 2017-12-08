var express = require("express");

var db = require("../models");
// var Recipe = require("../controllers/recipe.js");

module.exports = function(app) {
// main page upon - saved button
// post request to post current userId into joined table or post current recipeId?
	app.post('/api/userRecipes/:userID/:recipeID', function(req, res){
		
		function addRecipe (){
			db.Recipe.findOne({
				where: {
					userID: req.params.RecipeId	
				}
			}).then(function(recipe){
				if (!recipe){
					return res.status(404).send("Recipe " + req.params.RecipeId + " does not exist!");
				}

				this.recipe= recipe;

				return db.users.findOne({
					where: {
						id: req.params.userId
					}
				}).then(function(user){
					if(!user){
						return res.status(404).send("No user with the ID " + req.params.userId)
					}
					return this.recipe.addRecipe(user)
				}).then(function(userRecipe){
					console.log("userRecipe")
					console.log(UserRecipe)

					res.json(userRecipe)
				}).catch(function(err){
					console.log("Error: ", err)
					res.status(500).send(err)
				})
			})
		}
	});

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

