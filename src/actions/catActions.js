import * as types from './actionTypes';
import catApi from '../api/CatsApi';

export function loadCatsSuccess(cats) {
  return {type: types.LOAD_CATS_SUCCESS, cats};
}

export function updateCatSuccess(cat) {
  return {type: types.UPDATE_CAT_SUCCESS, cat}
}

export function createCatSuccess(cat) {
  return {type: types.CREATE_CAT_SUCCESS, cat}
}

// export function deleteCourseSuccess(course) {
//   return {type: types.DELETE_COURSE_SUCCESS, course}
// }

export function loadCats() {
  // make async call to api, handle promise, dispatch action when promise is resolved
  return function(dispatch) {
    return catApi.getAllCats().then(cats => {
      dispatch(loadCatsSuccess(cats));
    }).catch(error => {
      throw(error);
    });
  };
}

export function updateCat(cat) {
  return function (dispatch) {
    return catApi.updateCat(cat).then(responseCat => {
      dispatch(updateCatSuccess(responseCat));
    }).catch(error => {
      throw(error);
    });
  };
}

// export function deleteCourse(course) {
//   return function(dispatch) {
//     return courseApi.deleteCourse(course).then(() => {
//       console.log(`Deleted ${course.id}`)
//       dispatch(deleteCourseSuccess(course));
//     }).catch(error => {
//       throw(error);
//     })
//   }
// }







