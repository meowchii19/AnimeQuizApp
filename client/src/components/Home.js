import { Button, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'
import React from 'react'

export default function Home() {
  return (
    <div className='home'>
        <Typography variant='h5' 
                    component='h1'>
            <div >
              <h2 >ANIME QUIZ APP</h2>
              <Button style={{ fontSize: '1.3em',
                              fontWeight: '1000',
                              padding: '10px',
                              backgroundColor: '#00e400',
                              color: 'white', 
                              marginTop: '5%', 
                              width: '30%'}} 
                {...{ to: '/play', component: Link}}> 
                PLAY
              </Button>
          </div>
      </Typography>
    </div>
  )

}
