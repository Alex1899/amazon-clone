import React, {useEffect } from 'react';
import './styles/App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Checkout from './components/Checkout';
import Login from './components/Login';

import { useStateValue } from './context/StateProvider';


function App() {

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path='/checkout'>
            <Header />
            <Checkout />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/'>
            <Header />
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
