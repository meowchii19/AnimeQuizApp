import HeadersAppBarr  from './components/header/HeadersAppBarr'
import Login from './components/user/Login'
import Play from './components/play/Play'
import Home from './components/Home'
import Addnew from './components/user/authorizedFolder/AddnewQuestion'
import LogOutBtn from './components/user/logout'
import UpdateForm from './components/allQuestions/updateForm'
import GetAllQuestions from './components/allQuestions/allQuestions'
import { Container } from '@material-ui/core'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import React, { useContext } from 'react'
import AuthContext from './context/AuthContext'

export default function Routes() {
  
  const { loggedIn } = useContext(AuthContext)

  console.log(loggedIn)

  return (
    <Router>
      <div className="App">
      < HeadersAppBarr />
        <Switch>
          <React.Fragment>
            <Container  className='container'
                      style={{position:'absolute',
                            marginTop:'6vh',
                      }}  disableGutters={true}>
              <Route path='/' exact component={Home} />
              <Route path='/play' component={Play} />
              <Route path='/add' component={Addnew} />
              { 
                loggedIn === false && (
                <Route path='/login' component={Login} />
                )}
              { 
                loggedIn === true && (
            <Container  className='container2'
                       disableGutters={true}>
                <Route path='/update' component={GetAllQuestions} />
                <Route path='/logout' component={LogOutBtn} />
                <Route path='/edit/:id' component={UpdateForm} />
            </Container>
              )}
            </Container>
          </React.Fragment>
          </Switch>
      </div>
    </Router>
    );
  }

