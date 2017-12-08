module.exports = function(sequelize, DataTypes) {
	var Recipe = sequelize.define("Recipe", {

		name: DataTypes.STRING,
		tag: DataTypes.STRING,
		ingredients: DataTypes.STRING,
		instructions: DataTypes.STRING,
		// userID: DataTypes.INTEGER
	});

	Recipe.associate = function(models){
		Recipe.belongsToMany(models.User, {
			through: 'userRecipe'
		});
	};

	return Recipe;
}