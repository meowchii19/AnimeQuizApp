import { Paper, Grid } from '@material-ui/core'
import { useStyles } from '../useStyle'
import React, { useState  } from 'react'
import Countdown from './Countdown'
import MapChoices from './MapChoices'


export const GetQuestion = (data) => {

  const classes = useStyles()
  const [ showAnswer, setShowAnswer ] = useState(false)
  const [ displayWrong, setDisplayWrong] = useState(false)
  const [ displayCorrect, setDisplayCorrect] = useState(false)
  const { correctAnswer,
          wrongAnswer,
          nextQuestion,
          score,
          lives,
          choices,
          data :{ image, question, answer } } = data
  
  const handleClicks = (e,value,a) => {
    if(!showAnswer){
      if(value === a){
      setDisplayCorrect(true)
      correctAnswer()
      
    }else{
      setDisplayWrong(true)
      wrongAnswer()
    }
      setShowAnswer(!showAnswer)
      renderNextQuestion()
      setShowAnswer(true)
  }
}

  const renderNextQuestion = () => {
    setTimeout(function(){ 
        setDisplayCorrect(false)
        setDisplayWrong(false)
        setShowAnswer(false) 
        nextQuestion()
      ; },400)
  }

  const changeColor = () => {
      if(displayCorrect){
        return classes.correctAnswer
      }
      else if(displayWrong){
        return classes.wrongAnswer
      }
      return classes.question
  }

  return (
      <React.Fragment  >
        <Grid item xs={12} className='dontwalk'>
          <div style={{width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-evenly', 
                      position:'relative'}}>
            <h4> Score: {score}</h4>
            {!showAnswer ? <Countdown wrongAnswer={wrongAnswer} renderNextQuestion={renderNextQuestion}/> : <div><h4>Time : 00</h4></div> }
            <h4 > Lives : {lives}</h4>
          </div>
          <Paper style={{boxShadow:'none'}}className={classes.img}>
            <img className='img' style={{borderRadius: "10px"}}src={image} alt='steins' referrerPolicy="origin"/>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper style={{borderRadius: "10px"}} className={changeColor()} >
                        {question}
          </Paper>
        </Grid>
        { choices ? <MapChoices showAnswer={showAnswer} answer={answer} choices={choices} handleClicks={handleClicks}/> : <MapChoices choices={['','','','']}/> }
      </React.Fragment>
  ) 
  }

export default GetQuestion
