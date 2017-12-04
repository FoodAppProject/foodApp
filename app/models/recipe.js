module.exports = function(sequelize, dataTypes) {
	var Recipe = sequelize.define("Recipe", {
		routeName: dataTypes.STRING,
		name: dataTypes.STRING,
		ingredients: dataTypes.STRING,
		instructions: dataTypes.STRING
	});

	return Recipe;
}