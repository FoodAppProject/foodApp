//This function determines whether the meal is adequate, printing only if it is//
// var unirest = require('unirest');
$(document).ready(function(){

var isEntree = function(){  
    $.ajaxSetup({
    headers: { "X-Mashape-Key": "nFUz42r0U1mshpt0Uq7JBSv0QEGHp1IDmtEjsnh67XCScyf2nJ",
                "X-Mashape-Host": "spoonacular-recipe-food-nutrition-v1.p.mashape.com"}
            });
    $.ajax({ url: 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/random?limitLicense=false&number=1'})
    .then(function(result){
        var vegetarian = result.body.recipes[0].vegetarian
        var vegan = result.body.recipes[0].vegan
        var glutenFree = result.body.recipes[0].glutenFree
        var dairyFree = result.body.recipes[0].dairyFree
        var acceptableDish = result.body.recipes[0].dishTypes
        if ( acceptableDish.includes("main course") || acceptableDish.includes("salad") || acceptableDish.includes("breakfast") || acceptableDish.includes("soup") || acceptableDish.includes("dinner") || acceptableDish.includes("main dish") || acceptableDish.includes("lunch") || acceptableDish.includes("morning meal") || acceptableDish.includes("brunch") || acceptableDish.includes("breakfast")) {
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
                          console.log(ingredients[i].originalString)
                      }
                  },
                
                  getInstructions : function(result){   
                  console.log("<<<<-----------------------  INSTRUCTIONS  -------------------------->>>>")
                  var instructions  = result.body.recipes[0].analyzedInstructions[0].steps
                      for (var i = 0; i < instructions.length; i++) {
                          instructions[i]
                          console.log(instructions[i].step)
                      }    
                  },
                }
                
                console.log("<<<<--------- BASIC RECIPE INFO  ------------->>>>")
                        console.log(recipeInfo)
                        recipeInfo.getIngredients(result)
                        recipeInfo.getInstructions(result)

                        cb (result)
        }


        else {
          console.log('give us a moment while we search')
          isEntree()
        }
    })  
}

isEntree(function(recipe){
     console.log("Return recipe stuff" + recipe)
})

//prints only vegetarian entrees
// var unirest = require('unirest');
var isVegetarian = function(){  
    $.ajaxSetup({
    headers: { "X-Mashape-Key": "nFUz42r0U1mshpt0Uq7JBSv0QEGHp1IDmtEjsnh67XCScyf2nJ",
                "X-Mashape-Host": "spoonacular-recipe-food-nutrition-v1.p.mashape.com"}
            });
    $.ajax({ url: 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/random?limitLicense=false&number=1'})
    .then(function(result){
        var vegetarian = result.body.recipes[0].vegetarian
        var vegan = result.body.recipes[0].vegan
        var glutenFree = result.body.recipes[0].glutenFree
        var dairyFree = result.body.recipes[0].dairyFree
        var acceptableDish = result.body.recipes[0].dishTypes
if (acceptableDish.includes("main course") || acceptableDish.includes("salad") || acceptableDish.includes("breakfast") || acceptableDish.includes("soup") || acceptableDish.includes("dinner") || acceptableDish.includes("main dish") || acceptableDish.includes("lunch") || acceptableDish.includes("morning meal") || acceptableDish.includes("brunch") || acceptableDish.includes("breakfast")&&(vegetarian === true)) {
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
                            isVegetarian()
                            }
                        })  
                    }
            
//prints only vegan recipes
// var unirest = require('unirest');
var isVegan = function(){   
    $.ajaxSetup({
    headers: { "X-Mashape-Key": "nFUz42r0U1mshpt0Uq7JBSv0QEGHp1IDmtEjsnh67XCScyf2nJ",
                "X-Mashape-Host": "spoonacular-recipe-food-nutrition-v1.p.mashape.com"}
            });
    $.ajax({ url: 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/random?limitLicense=false&number=1'})
    .then(function(result){
        var vegetarian = result.body.recipes[0].vegetarian
        var vegan = result.body.recipes[0].vegan
        var glutenFree = result.body.recipes[0].glutenFree
        var dairyFree = result.body.recipes[0].dairyFree
        var acceptableDish = result.body.recipes[0].dishTypes
if (acceptableDish.includes("main course") || acceptableDish.includes("salad") || acceptableDish.includes("breakfast") || acceptableDish.includes("soup") || acceptableDish.includes("dinner") || acceptableDish.includes("main dish") || acceptableDish.includes("lunch") || acceptableDish.includes("morning meal") || acceptableDish.includes("brunch") || acceptableDish.includes("breakfast")&&(vegan === true)) {
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
                            isVegan()
                            }
                        })  
                    }
//prints only gluten-free recipes
// var unirest = require('unirest');
var isGlutenFree = function(){  
    $.ajaxSetup({
    headers: { "X-Mashape-Key": "nFUz42r0U1mshpt0Uq7JBSv0QEGHp1IDmtEjsnh67XCScyf2nJ",
                "X-Mashape-Host": "spoonacular-recipe-food-nutrition-v1.p.mashape.com"}
            });
    $.ajax({ url: 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/random?limitLicense=false&number=1'})
    .then(function(result){
        var vegetarian = result.body.recipes[0].vegetarian
        var vegan = result.body.recipes[0].vegan
        var glutenFree = result.body.recipes[0].glutenFree
        var dairyFree = result.body.recipes[0].dairyFree
        var acceptableDish = result.body.recipes[0].dishTypes
        if (acceptableDish.includes("main course") || acceptableDish.includes("salad") || acceptableDish.includes("breakfast") || acceptableDish.includes("soup") || acceptableDish.includes("dinner") || acceptableDish.includes("main dish") || acceptableDish.includes("lunch") || acceptableDish.includes("morning meal") || acceptableDish.includes("brunch") || acceptableDish.includes("breakfast")&&(glutenFree === true)) {
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
                            isGlutenFree()
                            }
                        })  
                    }
            
// var unirest = require('unirest');
var isDairyFree = function(){   
    $.ajaxSetup({
    headers: { "X-Mashape-Key": "nFUz42r0U1mshpt0Uq7JBSv0QEGHp1IDmtEjsnh67XCScyf2nJ",
                "X-Mashape-Host": "spoonacular-recipe-food-nutrition-v1.p.mashape.com"}
            });
    $.ajax({ url: 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/random?limitLicense=false&number=1'})
    .then(function(result){
        var vegetarian = result.body.recipes[0].vegetarian
        var vegan = result.body.recipes[0].vegan
        var glutenFree = result.body.recipes[0].glutenFree
        var dairyFree = result.body.recipes[0].dairyFree
        var acceptableDish = result.body.recipes[0].dishTypes
if (acceptableDish.includes("main course") || acceptableDish.includes("salad") || acceptableDish.includes("breakfast") || acceptableDish.includes("soup") || acceptableDish.includes("dinner") || acceptableDish.includes("main dish") || acceptableDish.includes("lunch") || acceptableDish.includes("morning meal") || acceptableDish.includes("brunch") || acceptableDish.includes("breakfast")&&(dairyFree === true)) {
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
                            isDairyFree()
                            }
                        })  
                    }
// Function for determining which command is executed
var pick = function(caseData, functionData) {
  switch (caseData) {
    case "eatme":
      isEntree(functionData);
      break;
    case "vegetarian":
      isVegetarian(functionData);
      break;
    case "vegan":
      isVegan(functionData);
      break;
    case "gluten-free":
      isGlutenFree(functionData);
      break;
    case "dairy-free":
      isDairyFree(functionData);
      break;
  }
};
// Function which takes in command line arguments and executes correct function accordigly
// function runThis (argOne, argTwo) {
//   pick(argOne, argTwo);
// };
// // MAIN PROCESS
// // =====================================
// runThis(process.argv[2], process.argv[3]);

})
