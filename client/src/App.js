import  HeadersAppBarr  from './components/header/HeadersAppBarr'
import Login from './components/login/Login'
import Play from './components/play/Play'
import Home from './components/Home'
import Addnew from './components/login/authorizedFolder/AddnewQuestion'
import UpdateForm from './components/allQuestions/updateForm'
import GetAllQuestions from './components/allQuestions/allQuestions'
import { Container } from '@material-ui/core'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
      < HeadersAppBarr />
          <Route path='/update' component={GetAllQuestions} />
      <Container  className='container'
        style={{position:'absolute',
                          margin:'0',
                    }}  disableGutters={true}>
          <Route path='/' exact component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/play' component={Play} />
          <Route path='/add' component={Addnew} />
          <Route path='/edit/:id' component={UpdateForm} />
       </Container>
      </div>
    </Router>
    );
  }

export default App;
