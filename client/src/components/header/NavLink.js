import { Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { useStyles } from '../useStyle'


export const NavLinks = (routeLink) => {
    const { button } = useStyles();

    const routeLinks = routeLink.prop 

    return routeLinks.map(({ label, href }) => {
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