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
   res.status(200).send('OK')
  }catch(err){
    res.status(500).send('Internal Server Error')
  }
}) 


//READ ALL QUESTIONS
router.get('/readAll', async (req, res) => {
  try{
    const entries = await Entries.find();
    res.status(200).send(entries)
  }catch(err) {
    res.status(500).send('Internal Server Error')
  }
})


//READ QUESTION
router.get('/read/:id', async (req, res) => {
  try{
  const entry = await  Entries.findById(req.params.id)
    res.json(entry)
  }catch(err){
    res.status(500).send('Internal Server Error')
  }
})


//UPDATE QUESTION
router.patch('/update/:id',  async (req, res) => {
const {id} = req.params
console.log(id)
  try{
    const update = await Entries.updateOne(
      { _id : req.params.id },
      { $set:{  
                image: req.body.image,
                question: req.body.question,
                answer: req.body.answer,
                incorrect_answers: req.body.incorrect_answers
              },
      }
  );
      res.status(200).send("OK")
  }catch(err){
   res.status(500).send('Internal Server Error')
  }
}) 


// DELETE QUESTION
router.delete('/delete/:id', async (req, res) => {
  try{
      const remove = await Entries.findOneAndDelete( { _id: req.params.id } )
      res.status(200).send(remove)
  }catch(err){
    res.status(500).send('Internal Server Error')
  }

}) 


module.exports = router
