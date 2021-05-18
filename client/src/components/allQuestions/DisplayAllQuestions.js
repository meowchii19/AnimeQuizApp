import React ,{ useState }from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid, Button }  from '@material-ui/core/';
import SimplePopover from './Modal'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: '400px',
    width: '400px' ,
    position: 'relative'
  },
  control: {
    padding: theme.spacing(2),
  },
}));








export const SpacingGrid = ({data}) => {
  const spacing  = 2;
  const classes = useStyles();
  const [ bool, setBool ] = useState(false)

const openModal = () => {
  console.log('asds')
  console.log(bool)
}

  return  (
  <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing}>
  
          {data.map((value) => (
            <Grid key={value._id} item>
              <Paper className={classes.paper}>
              <div className='paperContainer'>
              <img className='all-img'
                    src={value.image}
                    alt={value._id} />
                <h4><span>Answer:</span> {value.answer}</h4>
                {value.incorrect_answers.map((v,k)=>(
                  <h4 key={k}>Incorrect Answer: <span>{v}</span></h4>
                ))}
                  <div className='buttons'>
                    <Button onClick={()=> (openModal())} style={{margin:'10px'}} className='button edit'variant="contained" color="primary">
                      UPDATE
                    </Button>
                    <Button style={{margin:'10px'}} className='button delete'variant="contained" color="secondary">
                      DELETE
                    </Button>
                  </div>
              </div>


              </Paper>

            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  )
}

export default SpacingGrid
