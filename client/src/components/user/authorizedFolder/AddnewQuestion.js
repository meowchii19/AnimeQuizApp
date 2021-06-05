import TextField from '@material-ui/core/TextField'
import { Container,Button,Link } from '@material-ui/core/'
import React, { useState, useContext } from 'react'
import axios from 'axios'
import AuthContext from '../../../context/AuthContext'


export default function Login() {
  
  const { loggedIn } = useContext(AuthContext)
  
  const [ state, setState ] = useState({
    question: '', 
    imageUrl: '',
    answer: '',
    A: '' ,
    B: '',  
    C: '' ,
  })

  const handleSubmit = async (e) => {
    try{
        e.preventDefault()
        const wrongAnswers = [ state.A, state.B, state.C ]
        const allDataInputs = {                                           
                 "image": state.imageUrl,   
                 "question": state.question,
                 "answer" : state.answer,
                 "incorrect_answers": wrongAnswers
           }       
          await axios.post('http://localhost:4242/api/create', allDataInputs).then(res=> {
          if(res.status === 200){
             resetForm() 
          }else{
            alert('Please try again')
            }
          })
    }catch(err){
      console.log(err)
    }
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

  const Form = () => {
    return  <form style={{marginTop: '2vh'}} onSubmit={handleSubmit}>
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
 
  }

  const message = loggedIn === undefined ?  <h1>Loading ....</h1>:<h1>Ooops!! You must be Logged In to view this page</h1> 

  const IsLoggedin = ({message}) => {
    return <Container style={{display:"flex", justifyContent: "space-around", flexDirection: "column", height: "30vh", alignItems:'center'}}>
      {message}
      {loggedIn === false  && (
        <Link href="login" to="/login" variant="body2">
          {"Go to Login Page"}
        </Link>
      )}
      </Container>
    } 

    return  <div>
      { loggedIn === undefined && (<IsLoggedin message={message}/>)  }
      { loggedIn === true && (
        <Form />
      )}
      { loggedIn === false && (<IsLoggedin message={message}/>)  }
    </div>    
  
}
