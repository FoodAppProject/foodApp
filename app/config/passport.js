var passport = require('passport')
var LocalStrategy = require('passport-local').Strategy
var FacebookStrategy = require('passport-facebook').Strategy
var db = require('../models/index')


//tells passport we want to use a Local Strategy, logging in with a username and password
module.exports = function(passport){
	passport.use(new LocalStrategy(
		//user will sign in with email instead of username
		{
			user_name: 'user_name'
		},
		function(user_name, password, done){
			db.User.findOne({
				where: {
					user_name
				}
			})
			.then(function(dbUser){
				if(!dbUser){
					return done(null, false, {
						message: 'Incorrect username'
					})
				}
				else if(!dbUser.validPassword(password)){
					return done(null, false, {
						message: "Incorrect password"
					})
				}
			return done(null, dbUser)

			})
		}
	))

	passport.use(new FacebookStrategy({
		
		clientID: '805216279650927',
		clientSecret: '88ba957b0eeeb61f8f023d57d317d09e',
		callbackURL: 'http://localhost:8080/auth/facebook/callback',
		profileFields: ['id', 'name', 'email']
	},
	function(accessToken, refreshToken, profile, cb){
		db.User.findOne({
			where: {
				facebook_id: profile.id
			}
		})
		.then(function(user){
			var { email, first_name, last_name } = profile._json
			console.log(email)
			if(user){
				user.facebook_id = profile.id
				user.facebook_email = profile.email
				user.facebook_name = (`${ first_name } ${ last_name }`).trim()
				user.facebook_token = accessToken
				
				// user.profile_pic = profile_pic

				return user.save()
			}

			return db.User.create({
				facebook_id: profile.id,
				facebook_email: profile.email,
				facebook_name: (`${ first_name } ${ last_name }`).trim(),
				facebook_token: accessToken,
				// profile_pic: profile_pic
			})
		})
		.then(function(user){
			cb(null, user)
		})
		.catch(function(err){
			cb(err)
		})
	}
	))

	passport.serializeUser(function(user, cb){
		cb(null, user)
	})

	passport.deserializeUser(function(obj, cb){
		delete obj.password

		cb(null, obj)
	})
}