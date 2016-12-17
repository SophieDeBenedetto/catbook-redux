import * as types from './actionTypes';
import sessionApi from '../api/SessionApi';
import auth from '../auth/authenticator';


export function loginSuccess() {
  return {type: types.LOG_IN_SUCCESS}
}

export function loginUser(credentials) {
  return function(dispatch) {
    return sessionApi.login(credentials).then(response => {
      debugger
      sessionStorage.setItem('jwt', response.jwt);
      dispatch(loginSuccess());
    }).catch(error => {
      debugger;
      throw(error);
    });
  };
}

export function logOutUser() {
  auth.logOut();
  return {type: types.LOG_OUT}
}