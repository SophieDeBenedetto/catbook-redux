/*eslint-disable import/default */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import {loadCats} from './actions/catActions';
import {loadHobbies} from './actions/hobbyActions';
import '../node_modules/toastr/build/toastr.min.css';
  
const store = configureStore();

// 1. Call dispatch on the store with an argument of this action that makes an API request
// 2. The loadCourses() action is invoked, which makes an API call, and dispatches the loadCoursesSuccess action
// 3. that action: store -> root reducer -> courses reducer
// 4. courses reducer handles that action, recieves course payload and return new state that has courses: courses payload
// 5. the CoursesPage component is connected to the store, so store's new state triggers the mapStateToProps function, which triggers the render function on that component
store.dispatch(loadCats());
store.dispatch(loadHobbies());

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);