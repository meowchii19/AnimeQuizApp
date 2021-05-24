import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import React, { useState } from 'react'

export default function Login() {
  const [ state, setState ] = useState({
    userName: '', 
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

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(state.userName,state.password)
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <TextField style={{width:'50%',marginTop:'10%'}}
                    name='userName'
                   label="Username"
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
                      marginTop:'1rem'}}
                variant="contained" >
                 Login 
        </Button>
    </form>
  )
}
