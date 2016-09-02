import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function courseReducer(state = initialState.hobbies, action) {
  // state variable here reps just an array of courses
  switch(action.type) {
    case types.LOAD_HOBBIES_SUCCESS:
      return Object.assign([], state, action.hobbies); 
    default: 
      return state;
  }
}

// reducer takes current state and action and return NEW state
// this reducer handles list of courses, set default arg so that first time, list of courses is empty