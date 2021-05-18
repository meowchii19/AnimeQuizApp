import React , { useState, useEffect } from 'react';
import { useStyles } from './useStyle'
import { Question } from './questions'
import { GetQuestion } from './getQuestion'
import { Grid } from '@material-ui/core'

export default function Play() {

  const classes = useStyles();

  const [ question, setQuestion ] = useState({})
  const [ loading, setLoading ] = useState(true)

useEffect(() =>{
  Question().then(data => {
    setQuestion(data);
    setLoading(false)
  }) 
}, [])

  return !loading ? (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <GetQuestion { ...question } /> 
      </Grid>
    </div>
  ) : ( <h1>Loading</h1> );
}

