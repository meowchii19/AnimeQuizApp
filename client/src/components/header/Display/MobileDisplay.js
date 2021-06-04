import {  Toolbar, IconButton, Menu } from '@material-ui/core/'
import MenuIcon from '@material-ui/icons/Menu'
import React, { useState } from 'react'
import MenuBurgerChoices from '../MenuBurgerChoices'
import HomeButton from './homeButton'
import useStyles from '../../useStyle'
import headerNavLinks from '../headerNavLinks'

const MobileDisplay = () => {

  const {  toolbar } = useStyles();

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
        <div>{MenuBurgerChoices(headerNavLinks, handleClose)}</div>
      </Menu>

    </Toolbar>
  )
}
  export default MobileDisplay
