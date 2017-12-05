module.exports = function(sequelize, dataTypes) {
	var Recipe = sequelize.define("Recipe", {

		name: dataTypes.STRING,
		tag: dataTypes.STRING,
		ingredients: dataTypes.STRING,
		instructions: dataTypes.STRING,
		userID: dataTypes.INTEGER
	});

	Recipe.associate = function(models){
		Recipe.hasMany(models.User, {
			foreignKey: {
				allowNull: false
			}
		});
	};

	return Recipe;
}