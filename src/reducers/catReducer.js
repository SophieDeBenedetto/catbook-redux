import * as types from '../actions/actionTypes';
import initialState from './initialState';


export default function catReducer(state = initialState.cats, action) {
  // state variable here reps just an array of courses
  switch(action.type) {
    case types.LOAD_CATS_SUCCESS:
      // return action.cats;
      return Object.assign([], state, action.cats)
    case types.CREATE_CAT_SUCCESS:
      return [
        ...state.filter(cat => cat.id !== action.cat.id),
        Object.assign({}, action.cat)
      ]
    case types.UPDATE_CAT_SUCCESS:
      return [
        ...state.filter(cat => cat.id !== action.cat.id),
        Object.assign({}, action.cat)
      ]
    default: 
      return state;
  }
}
