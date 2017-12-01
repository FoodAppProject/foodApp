var unirest = require('unirest');



var recipeApp = function(){	
	unirest.get("https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/random?limitLicense=false&number=1")
	.header(var myKey = config.MY_KEY)
	.header("X-Mashape-Host", "spoonacular-recipe-food-nutrition-v1.p.mashape.com")
	.end(function(result){ 
       console.log("<<<<---------  BASIC RECIPE INFO  ------------->>>>")
			console.log("Title : " + result.body.recipes[0].title)
		    console.log("Image : " + result.body.recipes[0].image)
			console.log("Vegetarian : " + result.body.recipes[0].vegetarian)
			console.log("Vegan : " + result.body.recipes[0].vegan)
			console.log("Gluten-Free : " + result.body.recipes[0].glutenFree)
			console.log("Dairy-Free : " + result.body.recipes[0].dairyFree)
		    console.log("Dish Type : " + result.body.recipes[0].dishTypes)  
			getIngredients(result)
		})
	 	
	
var getIngredients = function(result){	
	console.log("<<<<---------  INGREDIENTS  ------------->>>>")
	var ingredients = result.body.recipes[0].extendedIngredients
	for (var i = 0; i < ingredients.length; i++) {
		ingredients[i]
		console.log(ingredients[i].originalString)
		
			}
		getInstructions(result)
		}		

var getInstructions = function(result){	
	console.log("<<<<-----------------------  INSTRUCTIONS  -------------------------->>>>")
	var instructions  = result.body.recipes[0].analyzedInstructions[0].steps
	for (var i = 0; i < instructions.length; i++) {
		instructions[i]
		console.log(instructions[i].step)
 		}
	}	
}

recipeApp()