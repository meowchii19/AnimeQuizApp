import AuthContext from '../../context/AuthContext'
import { useContext } from 'react'

export default function headerNavLinks () {
  const { loggedIn } = useContext(AuthContext)
   const NavLinks = [
        {
          label: "play",
          href: "/play",
        },
        {
          label: "Add New Questions",
          href: "/add",
        },
    ];

    if(loggedIn === false) return [
        {
          label: "play",
          href: "/play",
        },
        {
          label: "Add New Questions",
          href: "/add",
        },
      {
          label: "Login",
          href: "/login",
      }
    ];
 
    if(loggedIn === true) return [
        {
          label: "play",
          href: "/play",
        },
        {
          label: "Add New Questions",
          href: "/add",
        },
        {
          label: "update",
          href: "/update",
        },
      {
          label: "logout",
          href: "/logout",
      }
    ];

  return NavLinks
}


