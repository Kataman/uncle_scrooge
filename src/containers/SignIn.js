import React, { Component } from 'react';
import { connect } from 'react-redux';
import RegForm from '../components/regForm/RegForm';
import { SIGN_IN } from './../actions';

export default connect(
    null,
    dispatch => ({
      submit: newUser => dispatch({type: SIGN_IN, payload: newUser})
    })
  )(RegForm);
  