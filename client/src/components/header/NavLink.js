import { Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { useStyles } from '../useStyle'
import React from 'react'


export const NavLinks = ({headerNavLink}) => {
    const { button } = useStyles();

    return headerNavLink().map(({ label, href }) => {
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

export default NavLinks
