module.exports = function(sequelize, dataTypes){
	var User = sequelize.define('user',{
		user_name: dataTypes.STRING,
		password: dataTypes.STRING,
		email: dataTypes.STRING,
		birthday: dataTypes.DATE
	});
	return User;
}