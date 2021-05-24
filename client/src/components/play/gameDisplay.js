import { Paper, Grid, Button } from '@material-ui/core'
import { useStyles } from '../useStyle'
import React, { useState  } from 'react'
import Countdown from './Countdown'

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
    console.log(classes.question)
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
  }
}

  const renderNextQuestion = () => {
    setTimeout(function(){ 
        setDisplayCorrect(false)
        setDisplayWrong(false)
        setShowAnswer(false) 
        nextQuestion()
      ; },500)
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

const MapChoices = ({choices}) => {

      return choices.map((value, k) => {
          const borderColor = showAnswer?  value === answer ? '4px solid #00ff00' :
                              '4px solid #ee5a1d' : '3px solid #08f4f4'
          return (
              <Grid  key={k}item xs={6}>
                  <Button className={classes.notClicked} 
                    onClick={ ({target}) => handleClicks(target,value, answer)}
                    style={{ border: `${borderColor}` }}
                  >
                          {value}
                  </Button>
              </Grid>
          )}
      )
    }

  return (
      <React.Fragment  >
        <Grid item xs={12}>
          <div style={{width: '100%',
                      display: 'flex',
                      fontSize: '2vh',
                      alignItems: 'center',
                      justifyContent: 'space-evenly', 
                      position:'relative'}}>
            <h4> Score: {score}</h4>
            {showAnswer ? <Countdown wrongAnswer={wrongAnswer} renderNextQuestion={renderNextQuestion}/> : <div><h4>Time : 00</h4></div> }
            <h4 > Lives : {lives}</h4>
          </div>
          <Paper style={{boxShadow:'none'}}className={classes.img}>
            <img className='img' src={image} alt='steins'/>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={changeColor()} >
                        {question}
          </Paper>
        </Grid>
        { choices ? <MapChoices choices={choices}/> : <MapChoices choices={['','','','']}/> }
      </React.Fragment>
  ) 
  }

export default GetQuestion
