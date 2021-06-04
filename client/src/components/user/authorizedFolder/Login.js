import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import React, { useState, useContext } from 'react'
import { useHistory, Link } from 'react-router-dom'
import axios from 'axios'
import AuthContext from '../../context/AuthContext'

export default function Login() {
  const history = useHistory()
  const { getLoggedIn } = useContext(AuthContext)
  const [ state, setState ] = useState({
    email: '', 
    password: '',
  })
 
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

  const handleSubmit = async (e) => {
    e.preventDefault()
    try{
      const allDataInputs = {
        "email": state.email,
        "password": state.password,
      }
      await axios.post("http://localhost:4242/auth/login", allDataInputs)
        .then(res=> {
          if( res.status === 200 ){
            getLoggedIn()
            history.push('/update')
          }
        })
    } catch(err){
      console.log('err',err)
    }
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <TextField style={{width:'50%',marginTop:'10%'}}
                  name='email'
                   label="Email"
                    type='email'
                   variant="outlined"
                   required={true}
                   onChange={handleChange}

                   />
      <TextField style={{width:'50%',marginTop:'1rem'}}
                  name='password'
                   label="Password"
                   type='password'
                   required={true}
                   variant="outlined"
                   onChange={handleChange}
                   />
      <Button type="submit"
                style={{backgroundColor:'#24A0ED',
                      color: 'white',
                      width:'50%',
                      marginTop:'1rem',
                      marginBottom:'1rem'
                }}
                variant="contained" >
                 Login 
      </Button>
      <Link href="/register" to="register" variant="body3">
        {"Don't have an account? Sign Up"}
      </Link>

    </form>
  )
}
