/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './redux/indexReducer';
import reduxReset from 'redux-reset';

const templateShowOne = {
  id: 0,
  name: undefined,
  description: undefined,
  state: undefined,
  city: undefined,
  address: undefined,
  landline: undefined,
  mobile: undefined,
  email: undefined,
  website: undefined,
  instagram: undefined,
  category: {
    id: 0,
    name: undefined,
  },
  country: {
    id: 0,
    name: undefined,
    region: undefined,
  },
  photos: [
    {
      id: 0,
      image_data: undefined,
    },
  ],
  user: {
    id: 0,
    name: undefined,
    email: undefined,
  },
  reservations: [
    {
      id: 0,
      seat: 0,
      date_time: 0,
    },
  ],
  favorites: [
    {
      id: 0,
    },
  ],
};

export const initState = {
  user: false,
  error: {},
  commerces: {
    all: [],
    noFavorites: [],
    showOne: templateShowOne,
    favorites: [],
  },
  filters: {
    all: [],
    current: 0,
  },
};

const devTools = typeof window === 'object'
&& typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined'
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : f => f;

const store = createStore(
  rootReducer, initState,
  compose(
    applyMiddleware(thunk),
    reduxReset(),
    devTools,
  ),
);

export default store;
