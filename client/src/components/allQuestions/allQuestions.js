import React, { useEffect,useState } from 'react'
import Example from './Example'
import axios from 'axios'

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
  const quest = async () => {
    try{
      const data = await axios.get('http://localhost:4242/api/readAll')
      return data
    }catch(err) {
      console.log(err)
    }
  }

  useEffect(()=> {
    
    quest().then(res => handleData(res.data)).then(()=>setLoading(false))
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
