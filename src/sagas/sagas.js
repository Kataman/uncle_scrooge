import { call, put, takeEvery } from 'redux-saga/effects'
import { SIGNUP_START, SIGNIN_START, USER_FETCH_FAILED, USER_SIGN_IN_FAILED, INFO, INFO_IN_FAILED } from '../constants/actions';
import { signFetchSuccessed, loginFetchSuccessed } from '../actions';
import signUp from '../API/signup';
import signIn from '../API/signin';
// import getAccountInfo from './../API/getAccountInfo';

function* fetchUser(action) {
    try {
      const tokens = yield call(signUp, action.payload);
      yield put(signFetchSuccessed(tokens));
       
    } 
    catch (e) {
      yield put({type: USER_FETCH_FAILED, message: e.message});
    }
}

function* signInUser(action) {
  try {
    const tokens = yield call(signIn, action.payload);
    yield put(loginFetchSuccessed(tokens));
  } 
  catch (e) {
    yield put({type: USER_SIGN_IN_FAILED, message: e.message});
  }
}

// function* getInfo(action) {
//   try {
//     const info = yield call(getAccountInfo, action.payload);
//     yield put({type: INFO, payload: info });
//   }
//   catch (e) {
//     yield put({type: INFO_IN_FAILED, message: e.message});
//   }
// }


function* mySaga() {
  yield takeEvery(SIGNUP_START, fetchUser);
  yield takeEvery(SIGNIN_START, signInUser);
  // yield takeEvery(INFO, getInfo);  

}

export default mySaga;
