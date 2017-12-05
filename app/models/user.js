// var Sequelize = require('sequelize')
// var sequelize = require('../config/config.js')
// var bcrypt = require('bcrypt');

module.exports = function(sequelize, DataTypes){
	var User = sequelize.define('users',{
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
		// facebook_email: {
		// 	type: Sequelize.SRING,
		// 	unique: true,
		// 	validate: {
		// 		isEmail: true
		// 	}
		// },
		facebook_name: {
			type: DataTypes.STRING,
		},
		recipe_info: {
			type: DataTypes.TEXT
		}
	}, 
	{
		// hooks: {
		// 	beforeCreate: function(user, options){
		// 		user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null)
		// 	}
		// },

		tableName: 'users', 
		timestamps: true
	});

	// User.prototype.validPassword = function(password){
	// 	return bcrypt.compareSync(password, this.password)
	// }

	User.associate = function(models){
		User.hasMany(models.Recipe, {
			foreignKey: {
				allowNull: false
			}
		});
	};

	return User;

}

// recipe_info for later in database once user has saved recipes to their profile