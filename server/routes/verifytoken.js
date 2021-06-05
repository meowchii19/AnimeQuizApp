const jwt = require('jsonwebtoken');

function auth(req,res,next){

	try {
		const token = req.cookies.jwt;
		if(!token) return res.status(401).send({ errorMessage : 'Access Denied' })
	   const verified = jwt.verify(token, process.env.SECRET)
	   req.user = verified.user;

		next()
	} catch (err) {
		res.status(401).json({errorMessage :'Invalid Token' });
	}
 }



module.exports = auth
