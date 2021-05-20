import {  Paper, Grid, Button }  from '@material-ui/core/';
import  useStyles from '../useStyle'
import { useState } from 'react'
import { Link } from 'react-router-dom'
export const SpacingGrid = ({data}) => {

  const [ state, setState ] = useState(data)

  const classes = useStyles();

  const handleclick =(event) =>{
    console.log(event)
  }

  const deleteQuestion = async (e) => {
       await fetch(`http://localhost:4242/api/delete/${e}`, 
         { method: 'DELETE' }).then(() => {
           setState(state.filter(item=> item._id !== e))}) 
  }

  return  (
  <Grid container className={classes.rootGrid} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={2}>
  
          {state.map((value) => (
            <Grid key={value._id} item>
              <Paper className={classes.paperGrid}>
              <div className='paperContainer'>
              <img className='all-img'
                    src={value.image}
                    alt={value._id} />
                <p>{value.question}</p>
                <h4><span>Answer:</span> {value.answer}</h4>
                {value.incorrect_answers.map((v,k)=>(
                  <h4 key={k}>Incorrect Answer: <span>{v}</span></h4>
                ))}
                  <div className='buttons'>
                    <Button {...{ 
                      to: `/edit/${value._id}`,
                      component: Link,
                      }}
                                            style={{margin:'10px'}} 
                                            className='button edit'
                                            variant="contained" 
                                            color="primary">
                                            UPDATE
                    </Button>
                    <Button onClick={()=> {deleteQuestion(value._id)}}
                                          style={{margin:'10px'}} 
                                          className='button delete'
                                          variant="contained" 
                                          color="secondary">
                                          DELETE
                    </Button>
                  </div>
              </div>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  )
}

export default SpacingGrid
