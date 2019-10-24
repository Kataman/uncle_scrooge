import React, { Component } from 'react';
import './App.css';
import { ConnectedRouter } from 'react-router-redux';
import { PrivateRoute } from './containers/PrivateRoute';
import { BrowserRouter as Router, Route, Link, Redirect, withRouter, Switch } from "react-router-dom";

import SignUp from './containers/SignUp';
import SignIn from './containers/SignIn';
import Account from './components/account/Account';
import NotFound from './components/NotFound';


class App extends Component {   
  render() {
    return (
      <Router>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossOrigin="anonymous"/>

        <nav>
          <ul>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/account">Account</Link>
            </li>
          </ul>
        </nav>
      
        <Switch>
          <Route path="/register" component={SignUp} />
          <Route path="/login" component={SignIn} />
          <PrivateRoute path="/account" component={Account} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;
