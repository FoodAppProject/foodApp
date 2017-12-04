var bcrypt = require('bcrypt');

module.exports = function(sequelize, dataTypes){
	var User = sequelize.define('user',{
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
		facebook_email: {
			type: DataTypes.SRING,
			unique: true,
			validate: {
				isEmail: true
			}
		},
		facebook_name: {
			type: DataTypes.STRING,
		},
		recipe_info: {
			type: DataTypes.TEXT
		}
	}, {
		hooks: {
			beforeCreate: function(user, options){
				user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null)
			}
		},

		tableName: 'users', 
		timestamps: false
	});

	User.prototype.validPassword = function(password){
		return bcrypt.compareSync(password, this.password)
	}

	return User;

}

// recipe_info for later in database once user has saved recipes to their profile