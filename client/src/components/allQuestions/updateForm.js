import React, { useEffect, useState } from 'react'
import { TextField, Button } from '@material-ui/core'
import { useParams, useHistory } from 'react-router-dom'
import axios from 'axios'


export  default function UpdateForm () {
    const history = useHistory()
  const { id } = useParams()
 const [ loading, setLoading ]  = useState(true)
  const [ state, setState ] = useState({
    question: '', 
    imageUrl: '',
    answer: '',
    A: '' ,
    B: '',  
    C: '' ,
  })

  const getData = async() => {
    try{
      const response = await axios.get(`http://localhost:4242/api/read/${id}`)
      return response
    }catch(err) {
      console.log(err)
    }
  }

    const handleSubmit = async (e) => {
      try {
          e.preventDefault()
          const wrongAnswers = [ state.A, state.B, state.C ]
          const allDataInputs = {                                           
                   "image": state.imageUrl,   
                   "question": state.question,
                   "answer" : state.answer,
                   "incorrect_answers": wrongAnswers
             }       
          await axios.patch(`http://localhost:4242/api/update/${id}`, allDataInputs)
            .then(res=> {
              if(res.status === 200){
                  return history.push('/update') 
              }
            })
      }catch(err){
        console.log(err)
      }
  }

  useEffect(() => {
    
    getData().then(({data})=>{
      const { image, question, answer, incorrect_answers} = data
      setState({
            question: question, 
            imageUrl: image,
            answer: answer,
            A: incorrect_answers[0] ,
            B: incorrect_answers[1],  
            C: incorrect_answers[2] ,
      })
      setLoading(false)
    })
  },[])


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

  return !loading  ?(
    <form onSubmit={(e) => handleSubmit(e)}>
      <TextField style={{width:'50%',marginTop:'1rem'}}
                    value={state.imageUrl}
                    name='imageUrl'
                    type='url'
                    label="IMG URL"
                    variant="outlined"
                    required={true}
                    onChange={handleChange}
                   />
      <TextField style={{width:'50%',marginTop:'1rem'}}
                    value={state.question}
                  name='question'
                   id="outlined-basic"
                   label="Question"
                   variant="outlined"
                    required={true}
                    onChange={handleChange}
                   />
      <TextField style={{width:'50%',marginTop:'1rem'}}
                    value={state.answer}
                    name='answer'
                    id="outlined-basic"
                   label="answer"
                   variant="outlined"
                    required={true}
                    onChange={handleChange}
                   />
      <TextField style={{width:'50%',marginTop:'1rem'}}
                    value={state.A}
                    name='A'
                   label="incorrect answer A"
                   variant="outlined"
                    required={true}
                    onChange={handleChange}
                   />
      <TextField style={{width:'50%',marginTop:'1rem'}}
        value={state.B}
                    name='B'
                   type='text'
                   label="incorrect answer B"
                   variant="outlined"
                    required={true}
                    onChange={handleChange}
                   />
      <TextField style={{width:'50%',marginTop:'1rem'}}
                    value={state.C}
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
  ) : <h1>Loading ...</h1>
}
