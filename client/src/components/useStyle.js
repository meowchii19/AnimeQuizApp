import {  makeStyles} from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
  header: {
    minHeight: '80px',
  },
 clicked:{
	border: '1px solid green',
   padding: '10px',
   width: '100%'
},
 play:{
  border: ' 4px solid royalblue',
  borderRadius: '3%',
  padding: '10px',
    flexGrow: 1,
    width: '50%',
    margin: 'auto'
 },
 question:{
  border: '4px solid royalblue',
  fontWeight:'bolder',
  padding: '10px',
  fontSize:'2vh',
  color: 'royalblue' ,
  textAlign: 'center',
 },
 correctAnswer:{
  border: '4px solid #00ff00',
  fontWeight:'bolder',
  padding: '10px',
  fontSize:'2vh',
  color: '#333333' ,
  textAlign: 'center',
 },

 wrongAnswer:{
  border: '4px solid #ee5a1d',
  fontWeight:'bolder',
  padding: '10px',
  fontSize:'2vh',
  color: '#ee5a1d' ,
  textAlign: 'center',
 },
 
 wrong:{
  border: ' 4px solid #ee5a1d',
  borderRadius: '3%',
  padding: '10px',
    flexGrow: 1,
    width: '50%',
    margin: 'auto'
 },
 correct:{
  border: ' 4px solid #00FF00',
  borderRadius: '3%',
  padding: '10px',
    flexGrow: 1,
    width: '50%',
    margin: 'auto'
 },
 notClicked:{
   padding: '10px',
   width: '100%',
'@media (max-width: 900px)':{
  fontSize: '2vw',
}
},
playagain :{
  fontSize: '3vh',
  fontWeight: '1000',
  padding: '10px',
  backgroundColor: '#00e400',
  color: 'white', 
  width: '50%',
  marginTop: '5%',
},
  button: {
      fontFamily: "Open Sans, sans-serif",
      fontWeight: 700,
      size: "18px",
      marginLeft: "38px",
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    minHeight: '80px'
  },
  '@media (max-width: 900px)': {
    paddingLeft:0,
    header:{
      minHeight: '60px'
    },
  gameover:{
    fontSize: '3vw',
  },
  playagain :{
    width: '80%',
    fontSize: '4vw',
  },
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

 rootGrid: {
    flexGrow: 1,
  },
  paperGrid: {
    height: '400px',
    width: '400px' ,
    position: 'relative'
  },
  control: {
    padding: theme.spacing(2),
  },

}))

export default useStyles
