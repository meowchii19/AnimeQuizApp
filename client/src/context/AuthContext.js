import axios from 'axios'
import React, { useState, useEffect, createContext } from 'react'


const AuthContext = createContext()

 function AuthContextProvider(props) {

  const [ loggedIn, setLoggedIn ] = useState(undefined)

  const getLoggedIn = async () => {
    const logInRes = await axios.get("http://localhost:4242/auth/loggedIn")
    setLoggedIn(logInRes.data)
  }

  useEffect(() => {
    getLoggedIn()
  }, [])

  return <AuthContext.Provider value={{loggedIn, getLoggedIn}}>
        {props.children}
    </AuthContext.Provider>
}
export default AuthContext

export { AuthContextProvider }
