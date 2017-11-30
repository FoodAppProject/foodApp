var db = require('./models');

//need to update routes based on information from passport and what we will allow users to update

db.User.create({
	name: 
	email: 
	password:
});

db.User.findOne({
	where: {
		id: ?
	}
});

db.User.update('', {
	where: {
		id: ?
	}
}).then(function(){
	console.log(dbUser)
});