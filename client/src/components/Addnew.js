import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import React, { useState } from 'react'

export default function Login() {
  const [ imageUrl, setImageUrl ] = useState('')
  const [ question, setQuestion] = useState('')
  const [ answer, setAnswer] = useState('')
  const [ state, setState] = useState({
    a: '',
    b: '',
    c: '',
  })
 

  const handleSubmit = () => {
    console.log(state,answer,question,imageUrl)
    console.log(state.a)
  }
  const incorrectHandleChange = (e) => {
    setState((prevState) => ({
      ...prevState,
      [e.target.id]:e.target.value
    }))
  }
  return (
    <form>
      
      <TextField style={{width:'50%',marginTop:'1rem'}}
        onChange={(e)=> (setImageUrl(e.target.value))}
                  value={imageUrl}
                   label="IMG URL"
                   variant="outlined"
                   />
      <TextField style={{width:'50%',marginTop:'1rem'}}
                  value={question}
        onChange={(e)=> (setQuestion(e.target.value))}
                   id="outlined-basic"
                   label="Question"
                   variant="outlined"
                   />
      <TextField style={{width:'50%',marginTop:'1rem'}}
                  value={answer}
                  id="outlined-basic"
        onChange={(e)=> (setAnswer(e.target.value))}
                  type='text'
                   label="answer"
                   variant="outlined"
                   />
      <TextField style={{width:'50%',marginTop:'1rem'}}
                  value={state.a}
                   id="a"
                  type='text'
                   label="incorrect answer A"
                   variant="outlined"
                  onChange={incorrectHandleChange}
                   />
      <TextField style={{width:'50%',marginTop:'1rem'}}
                  value={state.b}
                   id="b"
                  type='text'
                   label="incorrect answer B"
                   variant="outlined"
                  onChange={incorrectHandleChange}
                   />
      <TextField style={{width:'50%',marginTop:'1rem'}}
                  value={state.c}
                   id="c"
                  type='text'
                   label="incorrect answer C"
                   variant="outlined"
                 onChange={incorrectHandleChange}
                   />
      <Button onClick={handleSubmit} style={{backgroundColor:'#24A0ED',
                      color: 'white',
                      width:'50%',
                      fontWeight: 'bolder',
                      marginTop:'1rem'}}
                      variant="contained" >
                      SUBMIT 
        </Button>
    </form>
  )
}
