import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import React, { useState } from 'react'
import { submitQuestion } from './submitQuestion'

export default function Login() {
  const [ state, setState ] = useState({
    question: '', 
    imageUrl: '',
    answer: '',
    A: '' ,
    B: '',  
    C: '' ,
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const ROUTE = { id:'', route: 'POST', url: 'create' }
    const wrongAnswers = [ state.A, state.B, state.C ]
    const allDataInputs = {                                           
             "image": state.imageUrl,   
             "question": state.question,
             "answer" : state.answer,
             "incorrect_answers": wrongAnswers
       }       
    submitQuestion(allDataInputs, ROUTE).then(res=> {
      if(res.status === 200){
         resetForm() 
      }else{
        alert('Please try again')
      }
    })
  }
  
  const resetForm = () => {
    const form = document.querySelector('form')
    form.reset()
  }

  const handleChange = (e) =>{
    const value = e.target.value
    const name = e.target.name
    setState((prev) => {
      return {
        ...prev,
        [name]: value
      }
    })
  }

  return (
    <form onSubmit={handleSubmit}>
   <TextField style={{width:'50%',marginTop:'1rem'}}
                  name='imageUrl'
                    type='url'
                     label="IMG URL"
                    variant="outlined"
                    required={true}
                    onChange={handleChange}
                   />
      <TextField style={{width:'50%',marginTop:'1rem'}}
                  name='question'
                   id="outlined-basic"
                   label="Question"
                   variant="outlined"
                    required={true}
                    onChange={handleChange}
                   />
      <TextField style={{width:'50%',marginTop:'1rem'}}
                  name='answer'
                  id="outlined-basic"
                   label="answer"
                   variant="outlined"
                    required={true}
                    onChange={handleChange}
                   />
      <TextField style={{width:'50%',marginTop:'1rem'}}
                    name='A'
                   label="incorrect answer A"
                   variant="outlined"
                    required={true}
                    onChange={handleChange}
                   />
      <TextField style={{width:'50%',marginTop:'1rem'}}
                    name='B'
                   type='text'
                   label="incorrect answer B"
                   variant="outlined"
                    required={true}
                    onChange={handleChange}
                   />
      <TextField style={{width:'50%',marginTop:'1rem'}}
                    name='C'
                   label="incorrect answer C"
                   variant="outlined"
                    required={true}
                    onChange={handleChange}
                   />
      <Button type='submit'   
              style={{backgroundColor:'#24A0ED',
                      color: 'white',
                      width:'50%',
                      fontWeight: 'bolder',
                      height: '3rem',
                      marginTop:'1rem'}}
                      variant="contained" >
                      SUBMIT 
        </Button>
    </form>
  )
}
