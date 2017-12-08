// var unirest = require('unirest');

// var isEntree = function(){	
// 	unirest.get("https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/random?limitLicense=false&number=1")
// 	.header("X-Mashape-Key", "nFUz42r0U1mshpt0Uq7JBSv0QEGHp1IDmtEjsnh67XCScyf2nJ")
// 	.header("X-Mashape-Host", "spoonacular-recipe-food-nutrition-v1.p.mashape.com")
// 	.end(function(result){
// 		var vegetarian = result.body.recipes[0].vegetarian
// 		var vegan = result.body.recipes[0].vegan
// 		var glutenFree = result.body.recipes[0].glutenFree
// 		var dairyFree = result.body.recipes[0].dairyFree
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
// 							isEntree()
// 							}

// 						})	

// 					}
// //prints only vegetarian entrees

// var unirest = require('unirest');

// var isVegetarian = function(){	
// 	unirest.get("https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/random?limitLicense=false&number=1")
// 	.header("X-Mashape-Key", "nFUz42r0U1mshpt0Uq7JBSv0QEGHp1IDmtEjsnh67XCScyf2nJ")
// 	.header("X-Mashape-Host", "spoonacular-recipe-food-nutrition-v1.p.mashape.com")
// 	.end(function(result){
// 		var vegetarian = result.body.recipes[0].vegetarian
// 		var vegan = result.body.recipes[0].vegan
// 		var glutenFree = result.body.recipes[0].glutenFree
// 		var dairyFree = result.body.recipes[0].dairyFree
// 		var acceptableDish = result.body.recipes[0].dishTypes
// 		if (acceptableDish.includes("main course" || "salad" || "breakfast" || "soup" || "dinner" || "main dish" || "lunch" || "morning meal" || "brunch" || "breakfast" )&&(vegetarian === true)) {

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
// 							isVegetarian()
// 							}

// 						})	

// 					}
			

// //prints only vegan recipes

// var unirest = require('unirest');

// var isVegan = function(){	
// 	unirest.get("https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/random?limitLicense=false&number=1")
// 	.header("X-Mashape-Key", "nFUz42r0U1mshpt0Uq7JBSv0QEGHp1IDmtEjsnh67XCScyf2nJ")
// 	.header("X-Mashape-Host", "spoonacular-recipe-food-nutrition-v1.p.mashape.com")
// 	.end(function(result){
// 		var vegetarian = result.body.recipes[0].vegetarian
// 		var vegan = result.body.recipes[0].vegan
// 		var glutenFree = result.body.recipes[0].glutenFree
// 		var dairyFree = result.body.recipes[0].dairyFree
// 		var acceptableDish = result.body.recipes[0].dishTypes
// 		if (acceptableDish.includes("main course" || "salad" || "breakfast" || "soup" || "dinner" || "main dish" || "lunch" || "morning meal" || "brunch" || "breakfast" )&&(vegan === true)) {

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
// 							isVegan()
// 							}

// 						})	

// 					}


// //prints only gluten-free recipes

// var unirest = require('unirest');

// var isGlutenFree = function(){	
// 	unirest.get("https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/random?limitLicense=false&number=1")
// 	.header("X-Mashape-Key", "nFUz42r0U1mshpt0Uq7JBSv0QEGHp1IDmtEjsnh67XCScyf2nJ")
// 	.header("X-Mashape-Host", "spoonacular-recipe-food-nutrition-v1.p.mashape.com")
// 	.end(function(result){
// 		var vegetarian = result.body.recipes[0].vegetarian
// 		var vegan = result.body.recipes[0].vegan
// 		var glutenFree = result.body.recipes[0].glutenFree
// 		var dairyFree = result.body.recipes[0].dairyFree
// 		var acceptableDish = result.body.recipes[0].dishTypes
// 		if (acceptableDish.includes("main course" || "salad" || "breakfast" || "soup" || "dinner" || "main dish" || "lunch" || "morning meal" || "brunch" || "breakfast" )&&(glutenFree === true)) {

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
// 							isGlutenFree()
// 							}

// 						})	

// 					}
			

// var unirest = require('unirest');

// var isDairyFree = function(){	
// 	unirest.get("https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/random?limitLicense=false&number=1")
// 	.header("X-Mashape-Key", "nFUz42r0U1mshpt0Uq7JBSv0QEGHp1IDmtEjsnh67XCScyf2nJ")
// 	.header("X-Mashape-Host", "spoonacular-recipe-food-nutrition-v1.p.mashape.com")
// 	.end(function(result){
// 		var vegetarian = result.body.recipes[0].vegetarian
// 		var vegan = result.body.recipes[0].vegan
// 		var glutenFree = result.body.recipes[0].glutenFree
// 		var dairyFree = result.body.recipes[0].dairyFree
// 		var acceptableDish = result.body.recipes[0].dishTypes
// 		if (acceptableDish.includes("main course" || "salad" || "breakfast" || "soup" || "dinner" || "main dish" || "lunch" || "morning meal" || "brunch" || "breakfast" )&&(dairyFree === true)) {

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
// 							isDairyFree()
// 							}

// 						})	

// 					}


// // Function for determining which command is executed
// var pick = function(caseData, functionData) {
//   switch (caseData) {
//     case "eatme":
//       isEntree(functionData);
//       break;
//     case "vegetarian":
//       isVegetarian(functionData);
//       break;
//     case "vegan":
//       isVegan(functionData);
//       break;
//     case "gluten-free":
//       isGlutenFree(functionData);
//       break;
//     case "dairy-free":
//       isDairyFree(functionData);
//       break;
//   }
// };
// // Function which takes in command line arguments and executes correct function accordigly
// var runThis = function(argOne, argTwo) {
//   pick(argOne, argTwo);
// };
// // MAIN PROCESS
// // =====================================
// runThis(process.argv[2], process.argv[3]);