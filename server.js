var express = require('express')
var bodyParser = require('body-parser')
var session = require('express-session')
var passport = require('passport')

var PORT = process.env.PORT || 8080
var db = require('./app/models/index')

var app = express()
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())
app.use(express.static('public'))

app.use(session({secret: 'keyboard cat', resave: true, saveUninitialized: true}))

require('./app/config/passport.js')(passport)
app.use(passport.initialize())
app.use(passport.session())

require('./app/routes/html-routes.js')(app)
require('./app/routes/api-routes.js')(app, passport)

app.listen(PORT, function(){
	console.log('Listening on port: ' + PORT)
})

module.exports = app