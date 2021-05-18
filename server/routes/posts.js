const express = require('express')
const router = express.Router()
const Entries = require("../models/model")

router.post('/post', async (req, res) =>{
  res.send(req.body)
})

//CREATE QUESTION
router.post('/create', async  (req, res) => {
  const entry = new Entries({
    image: req.body.image,
    question: req.body.question,
    answer: req.body.answer,
    incorrect_answers: req.body.incorrect_answers
  })
  try{
    const save = await entry.save()
    res.send(save)
  }catch(err){
    res.send(err)
  }
}) 


//READ ALL QUESTIONS
router.get('/readAll', async (req, res) => {
  try{
    const entries = await Entries.find();
    res.json(entries)
  }catch(err) {
    res.json({message: err})
  }
})


//READ QUESTION
router.get('/read/:id', async (req, res) => {
  try{
  const entry = await  Entries.findById(req.params.id)
    res.json(entry)
  }catch(err){
    res.json({err})
  }
})


//UPDATE QUESTION
router.get('/update:id',  (req, res) => {
}) 


// DELETE QUESTION
router.get('/delete:id', (req, res) => {
  res.send('delete')
}) 


module.exports = router
