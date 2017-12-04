var getRecipe = require("../controllers/recipe.js");

$(document).ready(function(){
	$("#no-btn").on('click', function(){
		// choose new photo/recipe again
		event.preventDefault();

		getRecipe();
		// can i do this??

		location.reload();

		// delete & reappend?
			// $.ajax("/spi/randomRecipe", {
			// 	type: "GET"
			// }).then(function(){
			// 	//reappend ?
			// }
	});

	$("#later-btn").on('click', function(){
		// post recipe information into user recipe div
		event.preventDefault();

		var id = $(this).data("id") //image id

		$.ajax("/api/users/" + id, {
			type: "POST"
		}).then(function(data){
			alert("Saved. Don't forget me!")
			location.reload();
		})

		// how append results onto user's page
	});

	$("#delete-btn").on("click", function(){
		event.preventDefault();

		var id = $(this).data("id") ; //image id


		$.ajax("/api/users/" + id, {
			type: "DELETE"
		}).then(function(){
			alert("Recipe Deleted!")
			location.reload();
		})
	})

	$("#yes-btn").on('click', function(){
		//append shit to modal
		// on click function for modal button?

		getRecipe(); 

		function modal(){

			var recipes = {
				name: name,
				ingredients: ingredients,
				instructions: instructions
			}

			$("#recipeTitle").append(recipes.name);
			$("#modalIngredients").append(recipes.ingredients);
			$("#modalInstructions").append(recipes.instructions);

		}
		modal();

		//launch saved modal icons with modal format blah blah and add delete button
		var savedRecipes = []
		//from database: all recipes with user's ID associated

		$.ajax('/api/:id', {
			// how do I get request from database table?
			type: "GET",
			data: req.params.id
		}).then(function(result){
			for (var i = 0; i < savedRecipes.length; i++) {
				
				var image = savedRecipes[i].imageURL;
				// how the heck do i turn an image into a button for Modal????

				var imageBtn = $("<button><img src=''></button>");
				imageBtn.addClass("image-btn");
				imageBtn.attr("data-toggle", "modal")
				imageBtn.attr("data-target", "#imageModal")

				$("savedRecipes").append(savedRecipes[i].imageURL)

				$("#imageModal").on("click", function(){
					// what is the images name???
					modal();
				})

				// add delete button per each image
				var deleteBtn = $("<button>");
				deleteBtn.addClass("delete-btn delete");
				deleteBtn.attr("delete-id", i+1);
				$("savedRecipes").append(deleteBtn)
			}
		})
	})

});

