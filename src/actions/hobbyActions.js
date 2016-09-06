import * as types from './actionTypes';
import hobbyApi from '../api/HobbyApi';

export function loadHobbiesSuccess(hobbies) {
  return {type: types.LOAD_HOBBIES_SUCCESS, hobbies};
}

export function loadHobbies() {
  return function(dispatch) {
    return hobbyApi.getAllHobbies().then(hobbies => {
      dispatch(loadHobbiesSuccess(hobbies));
    }).catch(error => {
      throw(error);
    });
  };
}
