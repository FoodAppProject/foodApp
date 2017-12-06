$(document).ready(function(){
	console.log("RUNNING")
	$("#no-btn").on('click', function(){
		// choose new photo/recipe again
		event.preventDefault();

		isEntree();
		specialDietsFilter();

		location.reload();

	});

	$("#later-btn").on('click', function(){
		// post recipe information into joined table 
		event.preventDefault();

		var id = userId

		$.ajax("/api/userRecipe/" + id, {
			type: "POST"
		}).then(function(data){
			alert("Saved. Don't forget me!")
			location.reload();
		})

	});


	$("#yes-btn").on('click', function(){
		//append shit to modal
		// on click function for modal button?

		getRecipe(); 

		function modal() {

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
	});
});

