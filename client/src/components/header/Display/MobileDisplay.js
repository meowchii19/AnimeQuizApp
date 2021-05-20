import {  Toolbar,  Button, IconButton, Menu } from '@material-ui/core/'
import MenuIcon from '@material-ui/icons/Menu'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import MenuBurgerChoices from '../MenuBurgerChoices'
import HomeButton from './homeButton'
import useStyles from '../../useStyle'

const MobileDisplay = (headersData) => {

  const { button, toolbar } = useStyles();

  const [ anchor, setAnchor ] = useState(null)

  const handleOpen = (event) => 
    setAnchor(event.currentTarget)
  const handleClose = () => 
    setAnchor(null)


  return (
    <Toolbar className={toolbar}>
      <HomeButton />
    <div >
     <IconButton
                edge="start"  
                color="inherit" 
                aria-label="menu"
                onClick={handleOpen}>
                <MenuIcon />
      </IconButton>
    </div>
      <Menu
          id="simple-menu"
          keepMounted
          anchorEl={anchor}
          open={Boolean(anchor)}
          onClose={handleClose}>
        <div>{MenuBurgerChoices(headersData.prop, handleClose)}</div>
      </Menu>

    </Toolbar>
  )
}
  export default MobileDisplay