import { Paper, Grid, Button } from '@material-ui/core'
import { useStyles } from '../useStyle'
import React from 'react'
export  const GetQuestion = (data) => {

    const classes = useStyles()

  const {data :{ image, question, answer, incorrect_answers}} = data
    return (
      <React.Fragment>
        <Grid item xs={12}>
          <Paper style={{boxShadow:'none'}}className={classes.img}>
            <img className='img' src={image} alt='steins'/>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper style={{backgroundColor: 'green',
                        color: 'white',
                        fontWeight:'bold',
                        fontSize:'1.2rem'}} 
                className={classes.paper} >
                        {question}
          </Paper>
        </Grid>
        <Grid  item xs={6}>
          <Paper className={classes.buttons}>
            <Button onClick={data.nextQuestion} style={{padding:'10px',
                          width:'100%' }}>
                    {answer}
            </Button>
          </Paper>
        </Grid>
          {incorrect_answers.map((v,k)=> {
              return (
              <Grid  key={k}item xs={6}>
                <Paper className={classes.buttons}>
                  <Button style={{padding:'10px',  width:'100%' }}>{v}</Button>
                </Paper>
              </Grid>
                )}
        )}
      </React.Fragment>
    )
  }

export default GetQuestion
