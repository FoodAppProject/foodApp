var LocalStrategy = require('passport-local').Strategy
var FacebookStrategy = require('passport-facebook').Strategy
var db = require('../models/index')


//tells passport we want to use a Local Strategy, logging in with a username and password
module.exports = function(passport){
	passport.use(new LocalStrategy(
		//user will sign in with email instead of username
		{
			username: 'email'
		},
		function(email, password, done){
			db.User.findOne({
				where: {
					email
				}
			})
			.then(function(dbUser){
				if(!dbUser){
					return done(null, false, {
						message: 'Incorrect email'
					})
			}
			return done(null, dbUser)

			})
		}
	))

	passport.use(new FacebookStrategy({
		clientID: process.env.805216279650927,
		clientSecret: process.env.88ba957b0eeeb61f8f023d57d317d09e,
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

			if(user){
				user.facebook_id = profile.id
				user.facebook_email = email
				user.facebook_name = (`${ first_name } ${ last_name }`).trim()
				user.facebook_token = accessToken

				return user.save()
			}

			return db.User.create({
				facebook_id: profile.id,
				facebook_email: email,
				facebook_name: (`${ first_name } ${ last_name }`).trim(),
				facebook_token: accessToken,
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
