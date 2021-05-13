import { CardMedia, makeStyles} from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
  header: {
  },
  button: {
      fontFamily: "Open Sans, sans-serif",
      fontWeight: 700,
      size: "18px",
      marginLeft: "38px",
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  '@media (max-width: 900px)': {
    paddingLeft:0,
  },
  root: {
    flexGrow: 1,
    width: '50%',
    margin: 'auto'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  buttons:{
    padding: theme.spacing(0),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  img:{
     padding: theme.spacing(0),
     outline: 'none',
     border: 'none',
	 
  },
}))

export default useStyles
