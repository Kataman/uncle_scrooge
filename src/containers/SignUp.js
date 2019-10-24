import React, { Component } from 'react';
import { connect } from 'react-redux';
import RegForm from '../components/regForm/RegForm';
import { SIGNUP_START } from '../constants/actions';

export default connect(
    null,
    dispatch => ({
      submit: newUser => dispatch({type: SIGNUP_START , payload: newUser})
    })
  )(RegForm);