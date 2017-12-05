var unirest = require('unirest');

function getRecipe(tags) {

	var url = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/random?limitLicense=false&number=1"

	if (tags) {
		url += "&tags=" + tags.join(",");
	}

	unirest.get(url)
		.header("X-Mashape-Key", "nFUz42r0U1mshpt0Uq7JBSv0QEGHp1IDmtEjsnh67XCScyf2nJ")
		.header("X-Mashape-Host", "spoonacular-recipe-food-nutrition-v1.p.mashape.com")
		.end(function(result) {

			return result.body.recipes[0];
		})

}

module.exports = getRecipe;