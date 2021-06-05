const router = require('express').Router();
const User = require('../models/user');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { registerValidation, loginValidation } = require('../validation')


router.post('/register', async (req, res) => {
	

	//checking if user is already exist
	try{
			//validate data before registering new user
			const { error } = registerValidation(req.body)
			if (error) return res.status(400).send( { message: error.details[0].message })

			const emailExist = await User.findOne({email: req.body.email});
			if(emailExist) return res.status(400).send({ message:'Email already exists' })

			const salt = await bcrypt.genSalt(10)
			const hashPassword = await bcrypt.hash(req.body.password, salt)
			
			// Create New User
			const newUser = new User({
						username: req.body.username,
						email: req.body.email,
						password: hashPassword 
			})
	    const savedUser = await newUser.save()

			const token = jwt.sign({ user: savedUser._id }, process.env.SECRET)
			res.cookie('jwt', token, {
				httpOnly: true,
			})
			res.send({ message: 'success' })
	
	}catch(err){
 	    res.status(400).send(err)
	}

	});

router.post('/login',  async (req, res) =>{

	//checking if user is already exist
	const user = await User.findOne({email: req.body.email});
	if(!user) return res.status(400).send({ message:'Email or Password does not Match'  })
	
	//password is correct
	const validPass = await bcrypt.compare(req.body.password, user.password)
	if(!validPass) return res.status(400).send({ message:'Invalid Password'  })
	
	//sign a token
	const token = jwt.sign({ _id: user._id }, process.env.SECRET)

	res.cookie('jwt', token, {
		httpOnly: true,
		maxAge: 24*60*60*1000
	})
	res.send({ message: 'success' })
})

router.get('/loggedIn', (req, res)=> {
	try{
		const token = req.cookies.jwt
		if(!token) return res.json(false)

		jwt.verify(token, process.env.SECRET)
		res.send(true)
	}catch (err) {
		return res.json(false)
	}
})

router.get("/logout", (req,res) => {
	res.cookie('jwt', '', {
		httpOnly: true,
		expires: new Date(0)
	}).send({ message: "logout" })
})

router.post('/log', (req, res) => {
	console.log(req.body)
})

module.exports = router;

