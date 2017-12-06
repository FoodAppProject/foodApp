$(document).ready(function(){

	loadImg();

	// $.ajax('/api/userRecipe', {
	// 	type: "GET",
	// 	// data: req.params.id
	// }).then(function(result){
	// 	for (var i = 0; i < savedRecipes.length; i++) {
			
	// 		var image = savedRecipes[i].imageURL;
	// 		// how the heck do i turn an image into a button for Modal????

	// 		var imageBtn = $("<input>");
	// 		imageBtn.addClass("image-btn");
	// 		imageBtn.attr("data-toggle", "modal")
	// 		imageBtn.attr("data-target", "#imageModal")

	// 		$("savedRecipes").append(savedRecipes[i].imageURL)

	// 		$("#imageModal").on("click", function(){
	// 			// what is the images name???
	// 			modal();
	// 		})

	// 		// add delete button per each image
	// 		var deleteBtn = $("<button>");
	// 		deleteBtn.addClass("delete-btn delete");
	// 		deleteBtn.attr("delete-id", i+1);
	// 		$("savedRecipes").append(deleteBtn)
	// 	}
	// });


	$("#delete-btn").on("click", function(){
		event.preventDefault();

		var id = userId; 


		$.ajax("/api/userRecipe/" + id, {
			type: "DELETE"
		}).then(function(){
			alert("Recipe Deleted!")
			location.reload();
		});
	});

	function loadImg() {
		$.ajax('/api/userRecipe', {
			type: "GET"
		}).then(function(savedRecipes){
			var recipeImg = savedRecipes.imgURL
			// somehow only return the image of the recipe 
			savedRecipes.forEach(recipe){
				appendToDom('#savedRecipes', recipeImg)
			}
			
		}).then(function(recipeImg) {
			var imgBtn = $("<button>");
			imgBtn.addClass("modalBtn imgBtn");
			imgBtn.attr("data-toggle", "modal");
			imgBtn.attr("data-target", "#savedModal")


			//somehow generate the modal div too

			var modal = $("<div>") 
			// fill in the blanks to make modal

		})
	}


})

