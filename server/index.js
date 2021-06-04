const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const app = express();
const cors = require('cors')
const cookieParser = require('cookie-parser')

dotenv.config()
app.use(express.json())
app.use(cookieParser())
app.use(cors({
  credentials: true,
  origin: 'http://localhost:3000'
}))

//Import Routes
const authRoute = require('./routes/auth')
const postsRoute = require('./routes/posts')

//Routes Middlewares
app.use('/api', postsRoute)
app.use('/auth', authRoute)


 
mongoose.connect(process.env.DB_CONNECT,
                 { useNewUrlParser: true , useUnifiedTopology: true },
                 () => console.log('db connected'))

//LISTEN TO PORT
const PORT =  process.env.PORT ||  1337
app.listen(PORT, () => console.log(`listening at port ${PORT}`))

