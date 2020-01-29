/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './redux/indexReducer';

const initState = {
  user: {},
  error: {},
  filter: 'All',
};

const devTools = typeof window === 'object'
&& typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined'
? window.__REDUX_DEVTOOLS_EXTENSION__()
: (f) => f;

const store = createStore(
  rootReducer, initState,
  compose(
    applyMiddleware(thunk),
    devTools,
  ),
);

export default store;
