import React, { useEffect,useState } from 'react'
import Example from './Example'
import FetchAllQuestions from '../FetchAllQuestions/FetchAllQuestions'

export default function DisplayAllQuestions () {
  const [ state, setState ] = useState({
    arr: []
  })

  const [ loading, setLoading ] = useState(true)
  const handleData =(data) =>{
    setState({
      arr:data
    })
  }

  useEffect(()=> {
    FetchAllQuestions()
          .then(res=>res.json())
          .then(data => handleData(data))

      setLoading(false)
  }, [])

  return !loading && state.arr.length >= 1 ?( 
    
      <div className='grid'>
        <Example data={state.arr} />
      </div>
    
  ) : 
      <div className='grid'>
        <h1>Loading ...</h1>
      </div>



}
