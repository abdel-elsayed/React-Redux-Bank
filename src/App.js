import React from "react";
import Home from './components/Home'
import Credits from './components/Credits'
import Debits from './components/Debits'
import NavBar from './components/NavBar.js'
import './App.css';

import {Provider} from 'react-redux'
import {createStore} from'redux'
import { useSelector } from 'react-redux';
import reducer from './reducer'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'



function App() {

  const initialState = {
    balance: 0,
    debits: [],
    credits: [],
    transactions: []
  }

  const store = createStore(reducer, initialState);
  return (
    <Provider store={store}>
      <Router>
        <NavBar />
        <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/credits">
                <Credits />
              </Route>
              <Route path="/debits">
                <Debits />
              </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
