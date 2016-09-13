import * as types from '../actions/actionTypes';
import initialState from './initialState';
import {browserHistory} from 'react-router';


export default function catReducer(state = initialState.cats, action) {
  switch(action.type) {
    case types.LOAD_CATS_SUCCESS:
     return action.cats
    case types.CREATE_CAT_SUCCESS:
      browserHistory.push(`/cats/${action.cat.id}`)
      return [
        ...state.filter(cat => cat.id !== action.cat.id),
        Object.assign({}, action.cat)
      ]
    case types.UPDATE_CAT_SUCCESS:
      return [
        ...state.filter(cat => cat.id !== action.cat.id),
        Object.assign({}, action.cat)
      ]
    case types.DELETE_CAT_SUCCESS: {
      const newState = Object.assign([], state);
      const indexOfCatToDelete = state.findIndex(cat => {return cat.id == action.cat.id})
      newState.splice(indexOfCatToDelete, 1);
      browserHistory.push('/cats');
      return newState;
    }
    default: 
      return state;
  }
}
