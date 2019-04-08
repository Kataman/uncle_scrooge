import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import signUp from '../API/signup';
import signIn from '../API/signin';


function* signUser(action) {
    try {
      const tokens = yield call(signUp, action.payload);
      yield put({type: "SIGNUP_SUCCESEDED", payload: tokens});
      
    } 

    catch (e) {
      yield put({type: "USER_SIGN_FAILED", message: e.message});
   }
}

function* fetchUser(action) {
  try {
    const tokens = yield call(signIn, action.payload);
    yield put({type: "SIGNIN_SUCCESEDED", payload: tokens});
    
  } 

  catch (e) {
    yield put({type: "USER_FETCH_FAILED", message: e.message});
 }
}

function* mySaga() {
  yield takeEvery("SIGN_UP", signUser);
  yield takeEvery("SIGN_IN", fetchUser)
}

export default mySaga;