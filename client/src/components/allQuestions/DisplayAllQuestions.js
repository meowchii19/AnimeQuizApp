import { Grid }  from '@material-ui/core/';
import  useStyles from '../useStyle'
import React, { useState } from 'react'
import MapAllQuestions from './MapAllQuestions'
import { useHistory } from 'react-router';

export const SpacingGrid = ({data}) => {

  const history = useHistory()
  const classes = useStyles();
  const [ allQuestions, setAllQuestions ] = useState(data)

  const setFilteredQuestions = (id) => {
    setAllQuestions(allQuestions.filter(item=> item._id !== id))    
  }

  return  (
  <Grid container className={classes.rootGrid} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={2}>
          < MapAllQuestions 
                            allQuestions={allQuestions} 
                            history={history}
                            setFilteredQuestions={setFilteredQuestions}
                            />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default SpacingGrid
