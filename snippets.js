		var vegetarian = result.body.recipes[0].vegetarian
		var vegan = result.body.recipes[0].vegan
		var glutenFree = result.body.recipes[0].glutenFree
		var dairyFree = result.body.recipes[0].dairyFree
		var acceptableDish = result.body.recipes[0].dishTypes	
user1 = {
	vegetarian: true,
	glutenFree: true,
	vegan: false,
	dairyFree: false
}

var isSpecial = function(x){
	if (vegetarian === true || vegan === true || glutenFree === true || dairyFree === true){
		console.log("isSpecial")
	}else{
		console.log("not special")
	}
}

isSpecial(user1)



var unirest = require('unirest');

var isEntree = function(){	
	unirest.get("https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/random?limitLicense=false&number=1")
	.header("X-Mashape-Key", "nFUz42r0U1mshpt0Uq7JBSv0QEGHp1IDmtEjsnh67XCScyf2nJ")
	.header("X-Mashape-Host", "spoonacular-recipe-food-nutrition-v1.p.mashape.com")
	.end(function(result){
		var vegetarian = result.body.recipes[0].vegetarian
		var vegan = result.body.recipes[0].vegan
		var glutenFree = result.body.recipes[0].glutenFree
		var dairyFree = result.body.recipes[0].dairyFree
		var acceptableDish = result.body.recipes[0].dishTypes
		if (acceptableDish.includes("main course" || "salad" || "breakfast" || "soup" || "dinner" || "main dish" || "lunch" || "morning meal" || "brunch" || "breakfast" )) {

				var recipeInfo = {
							title: result.body.recipes[0].title,
							image : result.body.recipes[0].image,
							vegetarian : result.body.recipes[0].vegetarian,
							vegan : result.body.recipes[0].vegan,
							glutenFree : result.body.recipes[0].glutenFree,
							dairyFree : result.body.recipes[0].dairyFree,
							dishType :  result.body.recipes[0].dishTypes,
						  getIngredients : function(result){	
						  console.log("<<<<---------  INGREDIENTS  ------------->>>>")
						  ingredients = result.body.recipes[0].extendedIngredients
						  for (var i = 0; i < ingredients.length; i++) {
							  ingredients[i]
							  (ingredients[i].originalString)}
							},
						
						  getInstructions : function(result){	
						  console.log("<<<<-----------------------  INSTRUCTIONS  -------------------------->>>>")
						  var instructions  = result.body.recipes[0].analyzedInstructions[0].steps
						  for (var i = 0; i < instructions.length; i++) {
							  instructions[i]
							  (instructions[i].step)}	
		  					 },

						}

				 return(recipeInfo)
						// var allIngredients = recipeInfo.getIngredients(result)
						// return allIngredients
						// var allInstructions = recipeInfo.getInstructions(result)
						// return allInstructions
						}else{
							console.log('give us a moment while we search')
							isEntree()
							}
							console.log(allIngredients)

						})	

					}
			
		isEntree()
		




//TALK TO SAM ABOUT INDENDTATION












// var unirest = require('unirest');

// var isEntree = function(){	
// 	unirest.get("https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/random?limitLicense=false&number=1")
// 	.header("X-Mashape-Key", "nFUz42r0U1mshpt0Uq7JBSv0QEGHp1IDmtEjsnh67XCScyf2nJ")
// 	.header("X-Mashape-Host", "spoonacular-recipe-food-nutrition-v1.p.mashape.com")
// 	.end(function(result){
// 		// var vegetarian = result.body.recipes[0].vegetarian
// 		// var vegan = result.body.recipes[0].vegan
// 		// var glutenFree = result.body.recipes[0].glutenFree
// 		// var dairyFree = result.body.recipes[0].dairyFree
// 		var acceptableDish = result.body.recipes[0].dishTypes
// 		if (acceptableDish.includes("main course" || "salad" || "breakfast" || "soup" || "dinner" || "main dish" || "lunch" || "morning meal" || "brunch" || "breakfast" )) {

// 				var recipeInfo = {
// 							title: result.body.recipes[0].title,
// 							image : result.body.recipes[0].image,
// 							vegetarian : result.body.recipes[0].vegetarian,
// 							vegan : result.body.recipes[0].vegan,
// 							glutenFree : result.body.recipes[0].glutenFree,
// 							dairyFree : result.body.recipes[0].dairyFree,
// 							dishType :  result.body.recipes[0].dishTypes,
// 						  getIngredients : function(result){	
// 						  console.log("<<<<---------  INGREDIENTS  ------------->>>>")
// 						  ingredients = result.body.recipes[0].extendedIngredients
// 						  for (var i = 0; i < ingredients.length; i++) {
// 							  ingredients[i]
// 							  console.log(ingredients[i].originalString)}
// 							  getIngredients()
// 							},
						
// 						  getInstructions : function(result, getIngredients){	
// 						  console.log("<<<<-----------------------  INSTRUCTIONS  -------------------------->>>>")
// 						  var instructions  = result.body.recipes[0].analyzedInstructions[0].steps
// 						  for (var i = 0; i < instructions.length; i++) {
// 							  instructions[i]
// 							  console.log(instructions[i].step)}	
// 		  					 },

// 						}

// 						return recipeInfo
// 						return recipeInfo.getIngredients(result)
// 						return recipeInfo.getInstructions(result, getIngredients)
// 						}else{
// 							console.log('give us a moment while we search')
// 							isEntree()
// 							}
// 							specialDietsFilter(result, recipeInfo, getIngredients, getInstructions)
// 						})	

// var specialDietsFilter = function(result, recipeInfo, getIngredients, getInstructions){
// 		console.log(result)	
// 		var vegetarian = result.body.recipes[0].vegetarian
// 		var vegan = result.body.recipes[0].vegan
// 		var glutenFree = result.body.recipes[0].glutenFree
// 		var dairyFree = result.body.recipes[0].dairyFree
// 			if(vegetarian === true || vegan === true || glutenFree === true || dairyFree === true){
// 				var recipeInfo = {
// 							title: result.body.recipes[0].title,
// 							image : result.body.recipes[0].image,
// 							vegetarian : result.body.recipes[0].vegetarian,
// 							vegan : result.body.recipes[0].vegan,
// 							glutenFree : result.body.recipes[0].glutenFree,
// 							dairyFree : result.body.recipes[0].dairyFree,
// 							dishType :  result.body.recipes[0].dishTypes,
// 						  getIngredients : function(result){	
// 						  console.log("<<<<---------  INGREDIENTS  ------------->>>>")
// 						  ingredients = result.body.recipes[0].extendedIngredients
// 						  for (var i = 0; i < ingredients.length; i++) {
// 							  ingredients[i]
// 							  console.log(ingredients[i].originalString)}
// 							},
						
// 						  getInstructions : function(result){	
// 						  console.log("<<<<-----------------------  INSTRUCTIONS  -------------------------->>>>")
// 						  var instructions  = result.body.recipes[0].analyzedInstructions[0].steps
// 						  for (var i = 0; i < instructions.length; i++) {
// 							  instructions[i]
// 							  console.log(instructions[i].step)}	
// 		  					 },

// 						}

// 				console.log("<<<<--------- BASIC RECIPE INFO  ------------->>>>")
// 						console.log(recipeInfo)
// 						recipeInfo.getIngredients(result)
// 						recipeInfo.getInstructions(result)
// 						}else{
// 							console.log('give us a moment while we search')
// 							specialDietsFilter()
// 							}
// 						}
// 					}
// 				isEntree()			
		
		
			
	
