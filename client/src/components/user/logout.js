import React, { useContext, useEffect } from 'react'
import axios from 'axios'
import AuthContext from '../../context/AuthContext'
import { useHistory } from 'react-router-dom'

export default function LogOutBtn() {

  const history = useHistory()
  const { getLoggedIn } = useContext(AuthContext)

  const logOut = async () => {
    await axios.get('http://localhost:4242/auth/logout')
      .then( res=> {
        if(res.status === 200){
          getLoggedIn()
          history.push('/')
        }
      })
  }
  
  useEffect(() => {
    logOut()
  })
  

  return <h1></h1>
}
