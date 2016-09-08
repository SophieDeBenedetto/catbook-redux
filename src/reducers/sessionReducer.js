import * as types from '../actions/actionTypes';
import initialState from './initialState';
import {browserHistory} from 'react-router';

export default function sessionReducer(state = initialState.session, action) {
  debugger;
  switch(action.type) {
    case types.LOG_IN_SUCCESS:
      debugger;
      browserHistory.push('/')
      return true
    case types.LOG_OUT:
      debugger;
      return false
    default: 
      return state;
  }
}

