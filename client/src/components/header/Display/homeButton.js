import useStyles from '../../useStyle'
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core/'
import React from 'react'

export const HomeButton = () => {
    const { button } = useStyles();
    return (
    <Button
        {...{
          color: 'inherit',
          to: '/',
          component: Link,
          className: button
        }}>
        ANIME QUIZ
    </Button>
    )
}

export default HomeButton
