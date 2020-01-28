/* eslint-disable no-underscore-dangle */
import { createStore } from 'redux';
import rootReducer from './redux/reducers/index';

const initState = {
  user: { email: '', password: '', password_confirmation: '' },
  filter: 'All',
};

const store = createStore(
  rootReducer, initState,
  typeof window === 'object'
    && typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined'
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : (f) => f,
);

export default store;
