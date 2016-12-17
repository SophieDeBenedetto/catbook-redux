import * as types from '../actions/actionTypes';
import initialState from './initialState';
import {browserHistory} from 'react-router';

export default function sessionReducer(state = initialState.session, action) {
  switch(action.type) {
    case types.LOG_IN_SUCCESS:
      browserHistory.push('/cats')
      return !!sessionStorage.jwt
    case types.LOG_OUT:
      browserHistory.push('/')
      return !!sessionStorage.jwt
    default: 
      return state;
  }
}

