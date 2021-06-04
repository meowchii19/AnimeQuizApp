const jwt = require('jsonwebtoken');

function auth(req,res,next){

	try {
		const token = req.cookies.jwt;
		console.log('jwt',req.cookies)
		console.log('cookie',req.cookies.jwt)
		console.log(process.env.SECRET)
		if(!token) return res.status(401).send({ errorMessage : 'Access Denied' })
	   const verified = jwt.verify(token, process.env.SECRET)
			console.log('access granted')
	   req.user = verified.user;

		next()
	} catch (err) {
		res.status(401).json({errorMessage :'Invalid Token' });
	}
 }



module.exports = auth
