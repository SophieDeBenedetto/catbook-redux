import * as types from './actionTypes';
import catApi from '../api/CatsApi';

export function loadCatsSuccess(cats) {
  return {type: types.LOAD_CATS_SUCCESS, cats};
}

// export function createCourseSuccess(course) {
//   return {type: types.CREATE_COURSE_SUCCESS, course}
// }

// export function updateCourseSuccess(course) {
//   return {type: types.UPDATE_COURSE_SUCCESS, course}
// }

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

// export function saveCourse(course) {
//   return function (dispatch, getState) {
//     return courseApi.saveCourse(course).then(course => {
//       course.id ? dispatch(updateCourseSuccess(course)) :
//         dispatch(createCourseSuccess(course));
//     }).catch(error => {
//       throw(error);
//     });
//   };
// }

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







