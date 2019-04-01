import React, { Component } from 'react';
import { connect } from 'react-redux';
import RegForm from '../components/regForm/RegForm';

export default connect(
    null,
    dispatch => ({
      submit: newUser => dispatch({type: 'SIGN_UP', payload: newUser})
    })
  )(RegForm);
  