import { Link as RouterLink} from 'react-router-dom'
import { Link, MenuItem } from '@material-ui/core'

export const getMenuChoices = (headersData,handleClose) => {
    return headersData.map(({ label, href }) => {
      return (
        <Link
          {...{
            component: RouterLink,
            to: href,
            color: "inherit",
            style: { textDecoration: "none" },
            key: label,
          }}
        >
          <MenuItem onClick={handleClose}>{label}</MenuItem>
        </Link>
      );
    });
  };
export default getMenuChoices
