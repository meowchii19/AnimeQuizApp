import NavLinks from '../NavLink'
import { Typography, Toolbar } from '@material-ui/core';
import useStyles from '../../useStyle'
import HomeButton from './homeButton'



export const DesktopDisplay = (headersNavLinks) => {
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
            <NavLinks prop={headersNavLinks.prop}/>
          </div>
    </Toolbar>  
    )  
}


  export default DesktopDisplay