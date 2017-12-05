//allows users access to different parts of the site only if logged in, if not, sends them to log in
module.exports = function(req, res, next){
	if(req.user){
		return next()
	}

	return res.redirect('/')
}