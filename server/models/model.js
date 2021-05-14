const mongoose = require('mongoose')


const requireString =  {
    type: String,
    required: true
  }
const modelSchema = mongoose.Schema({
  image:  requireString,
  question:  requireString,
  answer: requireString,
  incorrect_answers: Array,
  date: {
    type: Date,
    default: Date.now
  }
});


module.exports = mongoose.model('entries',modelSchema)
