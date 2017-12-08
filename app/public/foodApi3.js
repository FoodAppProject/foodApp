$(document).ready(function(){
	console.log("Running...Go!")
// initial run 
	$.ajaxSetup({
	    headers: { "X-Mashape-Key": "nFUz42r0U1mshpt0Uq7JBSv0QEGHp1IDmtEjsnh67XCScyf2nJ",
	                "X-Mashape-Host": "spoonacular-recipe-food-nutrition-v1.p.mashape.com"}
	            });
	    $.ajax({ 
	    	url: 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/random?limitLicense=false&number=1',
	    	method: "GET"
	    }).then(function(response){
	    	console.log("Showing response: ", response)
		  	
		  	console.log("Food Title: ", response.recipes[0].title)
		  	console.log("Image URL: ", response.recipes[0].image)

		  	var title = response.recipes[0].title;
			$(".foodTitle").append('<h1>' + title + '</h1>');

			var imageUrl = response.recipes[0].image;

			var foodImg = $("<img>");
		  	foodImg.attr("src", imageUrl);
		  	foodImg.attr("alt", "food image");

		  	$(".loadImage").append(foodImg);

		});
// clicking no to reload image/title
	$('#no-btn').on('click', function(){
		$(".loadImage").empty();
		$(".foodTitle").empty();

		$.ajaxSetup({
	    headers: { "X-Mashape-Key": "nFUz42r0U1mshpt0Uq7JBSv0QEGHp1IDmtEjsnh67XCScyf2nJ",
	                "X-Mashape-Host": "spoonacular-recipe-food-nutrition-v1.p.mashape.com"}
	            });
	    $.ajax({ 
	    	url: 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/random?limitLicense=false&number=1',
	    	method: "GET"
	    }).then(function(response){
	    	console.log("Showing response: ", response)
		  	
		  	console.log("Food Title: ", response.recipes[0].title)
		  	console.log("Image URL: ", response.recipes[0].image)

		  	var title = response.recipes[0].title;
			$(".foodTitle").append('<h1>' + title + '</h1>');

			var imageUrl = response.recipes[0].image;

			var foodImg = $("<img>");
		  	foodImg.attr("src", imageUrl);
		  	foodImg.attr("alt", "food image");

		  	$(".loadImage").append(foodImg);

		});
	    
	});

// 

})



