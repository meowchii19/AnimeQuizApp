import NavLinks from '../NavLink'
import { Typography, Toolbar } from '@material-ui/core';
import useStyles from '../../useStyle'
import HomeButton from './homeButton'
import React, { useContext } from 'react'
import headerNavLink from '../headerNavLinks'
import AuthContext from '../../../context/AuthContext'
import LogOutBtn from '../../user/logout'



export const DesktopDisplay = () => {
  const { loggedIn } = useContext(AuthContext)
  const { toolbar } = useStyles();
    const appName = (
        <Typography variant='h6' component='h1'>
          <HomeButton />
        </Typography>
      ) 

    return (
    <Toolbar className={toolbar}>
        {appName}
          <div>
            <NavLinks headerNavLink={headerNavLink}/>
          </div>
    </Toolbar>  
    )  
}


  export default DesktopDisplay
