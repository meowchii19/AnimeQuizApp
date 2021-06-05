import { Button, IconButton, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'
import React from 'react'
import GitHubIcon from '@material-ui/icons/GitHub'

export default function Home() {
  return (
    <div className='home'>
        <Typography variant='h5' 
                    component='h1'>
          <div style={{ marginTop: '30vh', height: '50vh' }}>
              <h2 >ANIME QUIZ APP</h2>
              <Button className='playButton' style={{ fontSize: '1em',
                              fontWeight: '1000',
                              backgroundColor: '#00e400',
                              color: 'white', 
                              marginTop: '3%', 
                              }} 
                {...{ to: '/play', component: Link}}> 
                PLAY
              </Button>
          </div>
      </Typography>
        <Typography variant='h5' 
                    component='h1'>
      <footer>
        <IconButton>
          <a className='githubLink' href="https://github.com/meowchii19/AnimeQuizApp"
            target="_blank"
            rel="noopener noreferrer">
            <GitHubIcon className="github"/>
            <span>Meowchii19</span>
          </a>
        </IconButton>
      </footer>
      </Typography>
    </div>
  )

}
