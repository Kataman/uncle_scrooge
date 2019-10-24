import React from 'react';
import { Route, Redirect } from 'react-router-dom';
// import Account from '../components/account/Account';
import AccountInfo from './../components/account/Account';

export const PrivateRoute = ({ component: AccountInfo, ...rest}) => (
  <Route
    {...rest}
    render={props =>
      localStorage.getItem('accessToken') ? (
        <AccountInfo {...props}/>      

      ) : (
        <Redirect to={
          {
            pathname: '/login',
            state: { from: props.location }
        }}
        />
      )
    }
  />
  
);
      





