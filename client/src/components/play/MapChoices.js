import { Grid, Button } from '@material-ui/core'
import { useStyles } from '../useStyle'
import React from 'react'

export const MapChoices = ({ choices, handleClicks, answer, showAnswer }) => {
      const classes = useStyles()

      return choices.map((value, k) => {
          const borderColor = showAnswer?  value === answer ? '3px solid #00ff00' :
                              '3px solid #ee5a1d' : '3px solid #08f4f4'
          return (
              <Grid  key={k}item xs={6}>
                  <Button data-buttons className={classes.notClicked} 
                    style={{ border: `${borderColor}` }}
                    onClick={ ({target}) => handleClicks(target,value, answer)}
                  >
                    <h3>{value}</h3>
                  </Button>
              </Grid>
          )}
      )
    }

export default MapChoices
