import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoginForm from '../components/regForm/LoginForm';
import { SIGN_IN } from './../actions';

export default connect(
    null,
    dispatch => ({
      submit: user => dispatch({type: SIGN_IN, payload: user})
    })
  )(LoginForm);
  