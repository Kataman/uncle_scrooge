import React, { Component } from 'react';
import { connect } from 'react-redux';
import RegForm from '../components/regForm/RegForm';
import { SIGN_UP } from './../actions';

export default connect(
    null,
    dispatch => ({
      submit: newUser => dispatch({type: SIGN_UP , payload: newUser})
    })
  )(RegForm);
  