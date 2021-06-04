import Routes from './Routes'
import axios from 'axios'
import React from 'react'
import { AuthContextProvider } from './context/AuthContext'

axios.defaults.withCredentials = true

function App() {
  return (
    <AuthContextProvider>
       <Routes />
    </AuthContextProvider>
    ) 
  }

export default App;
