import React , { useState, useEffect } from 'react';

import { Paper, Grid, Button } from '@material-ui/core';
import { useStyles } from './useStyle'

export default function Play() {
  
  const arr = [
  {
    "id": 2,
    'img': `https://upload.wikimedia.org/wikipedia/commons/f/f7/Lower_Manhattan_skyline_-_June_2017.jpg` ,
    "question": "Which actor played Richard III in the 1995 British film drama of the same title?",
    "choices": ["Ian McKellen", "Partrick Stewart", "Elijah Wood", 'wood elijah']
  }
]
  const image = `https://upload.wikimedia.org/wikipedia/commons/f/f7/Lower_Manhattan_skyline_-_June_2017.j      pg`
  const classes = useStyles();
  const lag = (ar) => {
    console.log(ar)
  }
  const loop = ({id,img,question, choices}) => {
    return (
      <React.Fragment key={id}>
        <Grid item xs={12}>
          <Paper className={classes.img}>
            <img className='img' src={img} alt='steins'/>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper style={{backgroundColor: 'green', color: 'white',fontWeight:'bold'}} className={classes.paper} >
            {question}
          </Paper>
        </Grid>
        {choices.map(x=> {
          return (
        <Grid  item xs={6}>
          <Paper className={classes.buttons}>
            <Button style={{padding:'10px',  width:'100%' }}>{x}</Button>
          </Paper>
        </Grid>
          )
        })}
      </React.Fragment>
    )
  }
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {loop(...arr)}
      </Grid>
    </div>
  );
}

