import { SIGNUP_FETCH_SUCCEEDED, SIGNUP_START, SIGNIN_START} from '../constants/actions';
import { SIGNIN_FETCH_SUCCEEDED } from './../constants/actions';

const signStart = newUser => ({
    type: SIGNUP_START,
    payload: newUser
});

const signFetchSuccessed = (tokens) => ({type: SIGNUP_FETCH_SUCCEEDED, payload: tokens });

const loginStart = user => ({
    type: SIGNIN_START,
    payload: user
})

const loginFetchSuccessed = (tokens) => ({type: SIGNIN_FETCH_SUCCEEDED, payload: tokens});

export {
    signStart,
    signFetchSuccessed,
    loginStart,
    loginFetchSuccessed,   
};



