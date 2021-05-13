import  ButtonAppBar  from './Appbar'
import Login from './components/Login'
import Play from './components/Play'
import Home from './components/Home'
import Addnew from './components/Addnew'
import { Container } from '@material-ui/core'
import { BrowserRouter as Router, Route } from 'react-router-dom'
function App() {
  return (
    <Router>
      <div className="App">
      < ButtonAppBar />
        <Container  className='container'style={{ margin:'0',position:'absolute'}} >
      <Route path='/' exact component={Home} />
      <Route path='/login' component={Login} />
      <Route path='/play' component={Play} />
      <Route path='/add' component={Addnew} />
        </Container>
    </div>
      </Router>
  );
}

export default App;
