import * as types from './actionTypes';
import userApi from '../api/UserApi';

export function loginSuccess() {
  return {type: types.LOG_IN_SUCCESS}
}

export function loginUser(credentials) {
  return function(dispatch) {
    return userApi.login(credentials).then(response => {
      localStorage.setItem('jwt', response.jwt);
      dispatch(loginSuccess());
    }).catch(error => {
      throw(error);
    });
  };
}

export function logOutUser() {
  return {type: types.LOG_OUT}
}