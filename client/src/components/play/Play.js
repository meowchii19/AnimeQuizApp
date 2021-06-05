import React , { useState, useEffect } from 'react';
import FetchAllQuestions  from '../FetchAllQuestions/FetchAllQuestions'
import useStyles  from '../useStyle'
import { GetQuestion } from './gameDisplay'
import { Grid } from '@material-ui/core'
import shuffleArray from './shuffleArrayofQuestions'
import Button from '@material-ui/core/Button'



export default function Play() {
  const classes = useStyles();
  const [ question, setQuestion ] = useState(undefined)
  const [ loading, setLoading ] = useState(true)
  const [ data, setData ] = useState([])
  const [ count,setCount ] = useState(0)
  const [ gameEnd, setGameEnd ] = useState(false)
  const [ score, setScore ] = useState(0)
  const [ lives, setLives ] = useState(3)
  const [ choices, setChoices] = useState([])
  const [ correct, setCorrect ] = useState(false)
  const [ wrong, setWrong ] = useState(false)

  useEffect(() => {
    FetchAllQuestions()
      .then( res => res.json())
      .then(data => { 
        setData(shuffleArray(data))
        setQuestion(data[0])
        setChoices(shuffleArray([data[0].answer, ...data[0].incorrect_answers]))
        setLoading(false)
      })
  }
, [])


  const correctAnswer = () => {
    setCorrect(true)
    setScore(score + 1)
  }
  const wrongAnswer = () => {
    setWrong(true)
    const life = lives - 1
    if( life === 0) {
      setTimeout(function(){ 
        setGameEnd(true)
      ; }, 500)
    }
    setLives(life)
  }

  const nextQuestion = () => {
     const currentCount = count + 1 
      if( currentCount >= data.length ){
        setGameEnd(true)
        return
      }
      setWrong(false)
      setCorrect(false)
      setCount(currentCount)
      setQuestion(data[currentCount])
      setChoices(shuffleArray([data[currentCount].answer, ...data[currentCount].incorrect_answers]))

    }
  const refreshPage = () => {
    window.location.reload()
  }

  const changeBackground = () => {
    if(correct){
      return classes.correct
    } else if(wrong){
      return classes.wrong
    }
    return classes.play
  }

  return  gameEnd ?
      <div className={classes.root}>
        <div className={classes.gameover} style={{textAlign:'center'}}>
        <h1 className='h1'>GAME OVER</h1>
          <h1 className='h1'>Score : {score}</h1>
          <Button className={classes.playagain} type='button' onClick={refreshPage}> <span>Play Again</span></Button>
      </div>
    </div> :!loading && question ? 
 (   <div className={ changeBackground()  }>
      <Grid container spacing={3} className='pangarap'>
        <GetQuestion  data={ question } 
                      score={score}
                      lives={lives}
                      choices={choices}
                      wrongAnswer={wrongAnswer}
                      correctAnswer={correctAnswer}
                      nextQuestion={nextQuestion}/> 
      </Grid>
    </div>) :
    <div className={classes.root}>
       <h1>Loading . . . </h1>
    </div>
}

