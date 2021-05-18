import {  Menu,  AppBar, Toolbar, Typography, Button, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu'
import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react'

import { useStyles } from './components/useStyle'
import { getMenuChoices } from './components/getMenuChoices'

const headersData = [
  {
    label: "Add New Questions",
    href: "/add",
  },
  {
    label: "Login",
    href: "/login",
  },
  {
    label: "update",
    href: "/update",
  },
];

export default function ButtonAppBar() {
  const { header, button, toolbar } = useStyles();
  const [ state, setState ] = useState({
    mobileView: false,
  })
  const [ anchor, setAnchor ] = useState(null)

  const { mobileView } = state;
  
  useEffect(() => {
    const setResponsive = () => {
      return window.innerWidth < 800 
            ? setState((prevState) => ({ ...prevState, mobileView: true }))
            : setState((prevState) => ({ ...prevState, mobileView: false }))
    }
    setResponsive();
    window.addEventListener('resize', () => setResponsive())
  }, []);
  
  const handleOpen = (event) => 
    setAnchor(event.currentTarget)
  const handleClose = () => 
    setAnchor(null)

  const displayMobile = () => {
    return (
      <Toolbar>
        <IconButton edge="start"  color="inherit" aria-label="menu"
          onClick={handleOpen}
        >
            <MenuIcon />
          </IconButton>
       <Button
         {...{
           color: 'inherit',
           to: '/',
           component: Link,
           className: button,
         }}>
         ANIME QUIZ
       </Button>
        <Menu
            id="simple-menu"
            keepMounted
            anchorEl={anchor}
            open={Boolean(anchor)}
            onClose={handleClose}
          >
          <div>{getMenuChoices(headersData, handleClose)}</div>
          </Menu>
      </Toolbar>
    )
  }
  
  const displayDesktop = () => {
    return <Toolbar className={toolbar}>
          {Anime}
      <div>{getMenuButtons()}</div>
          </Toolbar>  
  }
  const Anime = (
     <Typography variant='h6' component='h1'>
       <Button
         {...{
           color: 'inherit',
           to: '/',
           component: Link,
           className: button,
         }}>
         ANIME QUIZ
       </Button>
           </Typography>
  ) 
  const getMenuButtons = () => {
      return headersData.map(({ label, href }) => {
        return (
          <Button
            {...{
              key: label,
              color: "inherit",
              to: href,
              component: Link,
              className: button,
            }}
          >
            {label}
          </Button>
        );
      });
    };
    return (
        <header>
          <AppBar className={header} position='fixed'> 
            {mobileView? displayMobile() : displayDesktop()}</AppBar>
        </header>
      )
}

