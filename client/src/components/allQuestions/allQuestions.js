import React, { useEffect,useState } from 'react'
import Example from './Example'
import { Container } from '@material-ui/core'

export default function DisplayAllQuestions () {
  const [ state, setState ] = useState({
    arr: []
  })
  const [ loading, setLoading ] = useState(true)
  const getAllQuestions = async () => {
    const url = 'http://localhost:4242/api/readAll'
    const data =  await fetch(url)
    const response = await data.json()
    return response
  }

  const handleData =(data) =>{
    setState({
      arr:data
    })
  }

  useEffect(()=> {
    getAllQuestions().then(data=>{handleData(data)
    })
      setLoading(false)
  }, [])
  return !loading && state.arr.length > 1 ?( 
    <div className='grid'>
    <Example data={state.arr} />
  </div>
  ) : <h1>no data</h1>



}
