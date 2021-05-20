import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import React, { useState } from 'react'

export default function Login() {
  const [ user, setUser ] = useState('')
  const [ pass, setPass] = useState('')

  const handleSubmit = () => {
    console.log(user,pass)
  }
  return (
    <form>
      <TextField style={{width:'50%',marginTop:'10%'}}
        onChange={(e)=> (setUser(e.target.value))}
                   label="Username"
                   variant="outlined"
                   />
      <TextField style={{width:'50%',marginTop:'1rem'}}
        onChange={(e)=> (setPass(e.target.value))}
                   id="outlined-basic"
                   label="Password"
                   type='password'
                   variant="outlined"
                   />
      <Button onClick={handleSubmit} style={{backgroundColor:'#24A0ED',
                      color: 'white',
                      width:'50%',
                      marginTop:'1rem'}}
                variant="contained" >
                 Login 
        </Button>
    </form>
  )
}
