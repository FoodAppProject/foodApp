//This function determines whether the meal is adequate, printing only if it is//

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
						  console.log(ingredients[i].originalString)}
					},
				
				  getInstructions : function(result){	
				  console.log("<<<<-----------------------  INSTRUCTIONS  -------------------------->>>>")
				  var instructions  = result.body.recipes[0].analyzedInstructions[0].steps
					  for (var i = 0; i < instructions.length; i++) {
						  instructions[i]
						  console.log(instructions[i].step)}	
  					 },

				}

				console.log("<<<<--------- BASIC RECIPE INFO  ------------->>>>")
						console.log(recipeInfo)
						recipeInfo.getIngredients(result)
						recipeInfo.getInstructions(result)
					}
		else {
			console.log('give us a moment while we search')
			isEntree()
		}

		})	

	}
			
isEntree()	
///------------------------------Returns Any Special Diet Recipes-----------------------------///
//here we would also include an && for users who were vegan and gluten-free.  The reason why I don't have it is because just pulling a vegan recipe took sometimes 9
//tries.  I thought that getting it too restrictive would slow down the app.  Also I have yet to include a filter that
//limits results to not include sauces, cocktails, desserts when there is also a dietary specification.  

var specialDietsFilter = function(){	
	unirest.get("https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/random?limitLicense=false&number=1")
	.header("X-Mashape-Key", "nFUz42r0U1mshpt0Uq7JBSv0QEGHp1IDmtEjsnh67XCScyf2nJ")
	.header("X-Mashape-Host", "spoonacular-recipe-food-nutrition-v1.p.mashape.com")
	.end(function(result){
		var vegetarian = result.body.recipes[0].vegetarian
		var vegan = result.body.recipes[0].vegan
		var glutenFree = result.body.recipes[0].glutenFree
		var dairyFree = result.body.recipes[0].dairyFree
		
		if(vegetarian === true || vegan === true || glutenFree === true || dairyFree === true){
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
							  console.log(ingredients[i].originalString)}
							},
						
						  getInstructions : function(result){	
						  console.log("<<<<-----------------------  INSTRUCTIONS  -------------------------->>>>")
						  var instructions  = result.body.recipes[0].analyzedInstructions[0].steps
						  for (var i = 0; i < instructions.length; i++) {
							  instructions[i]
							  console.log(instructions[i].step)}	
		  					 },

						}

				console.log("<<<<--------- BASIC RECIPE INFO  ------------->>>>")
						console.log(recipeInfo)
						recipeInfo.getIngredients(result)
						recipeInfo.getInstructions(result)
						}else{
							console.log('give us a moment while we search')
							specialDietsFilter()
							}

						})	

					}
			
		specialDietsFilter()	
