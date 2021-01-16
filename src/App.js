import './App.css';
import { useSelector } from 'react-redux';
import Debit from './components/Debits'
import Balance from './components/Balance'
import Credits from './components/Credits'
import Debits from './components/Debits'
import {Provider} from 'react-redux'
import NavBar from './components/NavBar.js'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'



function App() {

  const initialState = {
    balance: 0,
    debits: [],
    credits: []
  }
  return (
    <>
    <Router>
    <NavBar />
    <Switch>
          <Route exact path="/">
            <Balance />
          </Route>
          <Route path="/credits">
            <Credits />
          </Route>
          <Route path="/decits">
            <Debits />
          </Route>
        </Switch>
    </Router>
  </>
  );
}

export default App;
