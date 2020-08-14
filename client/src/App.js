import React, {useEffect } from 'react';
import './styles/App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Checkout from './components/checkout/Checkout';
import Login from './components/auth/Login';
import Register from './components/auth/Register';


function App() {

  return (
    <Router>
      <div className="App">
        <Switch>
        <Route exact path='/'>
            <Header />
            <Home/>
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/register'>
            <Register />
          </Route>
          <Route path='/checkout'>
            <Header />
            <Checkout />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
