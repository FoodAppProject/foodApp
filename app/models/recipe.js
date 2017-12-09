module.exports = function(sequelize, DataTypes) {
	var Recipe = sequelize.define("Recipe", {

		name: DataTypes.STRING,
		ingredients: DataTypes.STRING,
		instructions: DataTypes.STRING
    
	});

	Recipe.associate = function(models){
		Recipe.belongsToMany(models.User, {

			through: 'userRecipe'

		});
	};

	return Recipe;
}