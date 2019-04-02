import React, { Component } from 'react';
import './App.css';

import SignUp from './containers/SignUp';
import SignIn from './containers/SignIn';
import Account from './components/account/Account';

import { BrowserRouter as Router, Route, Link, Redirect, withRouter } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <Router>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossOrigin="anonymous"
        />

        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
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

        <Route path="/register" exact component={SignUp} />
        <Route path="/login" exact component={SignIn} />
        <Route path="/account" exact component={Account} />
        
      </Router>
    );
  }
}

export default App;
