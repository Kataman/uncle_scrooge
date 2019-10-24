import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoginForm from '../components/regForm/LoginForm';
import { SIGNIN_START } from './../constants/actions';

export default connect(
    null,
    dispatch => ({
      submit: user => dispatch({type: SIGNIN_START, payload: user})
    })
  )(LoginForm);
  