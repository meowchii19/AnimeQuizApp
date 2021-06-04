import {   AppBar  } from '@material-ui/core';
import React, { useState, useEffect } from 'react'
import MobileDisplay from './Display/MobileDisplay'
import { useStyles } from '../useStyle'
import DesktopDisplay from './Display/DesktopDisplay'

export default function HeadersAppBarr() {

  const { header } = useStyles();
  const [ state, setState ] = useState({ mobileView: false  })
  const { mobileView } = state;
  
  useEffect(() => {
    const setResponsive = () => {
      return window.innerWidth < 950 
            ? setState((prevState) => ({ ...prevState, mobileView: true }))
            : setState((prevState) => ({ ...prevState, mobileView: false }))
    }
    setResponsive();
    window.addEventListener('resize', () => setResponsive())
  }, []);

    return (
        <header>
          <AppBar className={header} position='fixed'> 
            {mobileView? <MobileDisplay /> : <DesktopDisplay  />}</AppBar>
        </header>
      )
}
