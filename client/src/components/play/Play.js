import React , { useState, useEffect } from 'react';
import FetchAllQuestions  from '../FetchAllQuestions/FetchAllQuestions'
import useStyles  from '../useStyle'
import { GetQuestion } from './gameDisplay'
import { Grid } from '@material-ui/core'
import shuffleArray from './shuffleArrayofQuestions'



export default function Play() {
  const classes = useStyles();
  const [ question, setQuestion ] = useState(undefined)
  const [ loading, setLoading ] = useState(true)
  const [ data, setData ] = useState([])
  const [ count,setCount ] = useState(0)

  useEffect(() => {
    FetchAllQuestions()
      .then( res => res.json())
      .then(data => { 
        setData(shuffleArray(data))
        setQuestion(data[0])
        setLoading(false)
        setCount(0)
      })
  }
, [])
  
  const nextQuestion = () => {
    console.log(count)
    setCount(count +1)
    setQuestion(data[count+1])
  }

  return !loading && question? (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <GetQuestion data={ question } nextQuestion={nextQuestion} /> 
      </Grid>
    </div>
  ) :   
    <div className={classes.root}>
       <h1>Loading . . . </h1>
    </div>
}

