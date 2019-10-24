import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import {SIGNUP_START, SIGNUP_FETCH_SUCCEEDED, } from '../constants/actions';
import { SIGNIN_START, SIGNIN_FETCH_SUCCEEDED } from './../constants/actions';

const initialState = {
    loading: false,
    tokens: {
        accessToken: '',
        refreshToken: ''
    },
    isLoggedIn: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGNUP_START:
        case SIGNIN_START:
            return {
                ...state,
                loading: true,
            };
        case SIGNUP_FETCH_SUCCEEDED:
        case SIGNIN_FETCH_SUCCEEDED:
            localStorage.setItem('refreshToken', action.payload.refreshToken);
            localStorage.setItem('accessToken', action.payload.accessToken);
            return {
                ...state,
                loading: false,
                tokens: action.payload,
                isLoggedIn: true,
            };
        default :
            return state;
    }
};

export default reducer;