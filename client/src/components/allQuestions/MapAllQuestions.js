import {  Paper, Grid, Button }  from '@material-ui/core/';
import  useStyles from '../useStyle'
import { GoToUpdateForm, deleteQuestion } from './buttonFunctions'

const Buttons = (prop) => {

    const { value, color, click, id, func } = prop
    return (
      <Button onClick={()=> {click(func,id)}}
              style={{margin:'10px'}} 
              className='button'
              variant="contained" 
              color={color}>
                {value}
      </Button>
    )
}

export const MapAllQuestions = (prop) => { 

    const classes = useStyles();

    const { allQuestions, history, setFilteredQuestions } = prop 

    return allQuestions.map((value) => (
        <Grid key={value._id} item>
          <Paper className={classes.paperGrid}>
            <div className='paperContainer'>
              <div className='imgcontainer'>
                <img className='all-img'
                      src={value.image}
                      alt={value._id} />
              </div>
                  <div className='description'>
                    <h4>Question: <em>{value.question}</em></h4>
                    <h4> Answer:  <em> {value.answer}</em></h4>
                    {value.incorrect_answers.map((v,k)=>(
                      <h4 style={{ fontSize:'1.0rem'}}key={k}>Incorrect Answer: <em>{v}</em></h4>
                    ))}
                  </div>
                    <div className='buttons'>
                      <Buttons value={'update'} color={'primary'} click ={GoToUpdateForm} func={history} id={value._id}/>
                      <Buttons value={'Delete'} color={'secondary'} click={deleteQuestion} func={setFilteredQuestions} id={value._id}/>
                    </div>
                </div>
            </Paper>
        </Grid>
    ))
    
}


export default MapAllQuestions