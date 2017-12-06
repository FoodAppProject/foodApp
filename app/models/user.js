// var Sequelize = require('sequelize')
// var sequelize = require('../config/config.js')
// var bcrypt = require('bcrypt');

module.exports = function(sequelize, DataTypes) {
	var User = sequelize.define('User',{
		user_name: {
			type: DataTypes.STRING,
			unique: true
		},
		email: {
			type: DataTypes.STRING,
			unique: true,
			validate: {
				isEmail: true
			}
		},
		password: {
			type: DataTypes.STRING,
		},
		facebook_token: {
			type: DataTypes.STRING,
		},

		facebook_name: {
			type: DataTypes.STRING,
		},
		recipe_info: {
			type: DataTypes.TEXT
		}
	}, 
	{
		tableName: 'users', 
		timestamps: true
	});

	User.associate = function(models){
		User.belongsToMany(models.Recipe, {
			through: "UserRecipe"
		});
	};

	return User;

}

// recipe_info for later in database once user has saved recipes to their profile