const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const app = express();
const cors = require('cors')

app.use(cors())

dotenv.config()
//Import Routes
app.use(express.json())
const postsRoute = require('./routes/posts')

app.use('/api', postsRoute)

//Middlewares

//ROUTES
app.get('/', (req, res) => {
  res.send('body')
})

mongoose.connect(process.env.DB_CONNECT,
                 { useNewUrlParser: true , useUnifiedTopology: true },
                 () => console.log('db connected'))
//LISTEN TO PORT
const PORT =  process.env.PORT ||  1337
app.listen(PORT, () => console.log(`listening at port ${PORT}`))

