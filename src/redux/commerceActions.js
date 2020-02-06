import axios from 'axios';
import { ERROR_LOG } from './errorActions';

const errorLogger = (error, dispatch) => dispatch({ type: ERROR_LOG, error });

const BASE_URL = 'http://localhost:3000/v1';

const GET_ALL_COMMERCES = 'GET_ALL_COMMERCES';

const getAllCommerces = () => dispatch => (
  axios.get(`${BASE_URL}/commerces/index`)
    .then((response) => {
      dispatch({
        type: GET_ALL_COMMERCES,
        payload: response.data,
      });
    }, error => errorLogger(error, dispatch))
);

const GET_ONE_COMMERCE = 'GET_ONE_COMMERCE';

const getOneCommerce = () => dispatch => (
  axios.get(`${BASE_URL}/commerces/index`)
    .then((response) => {
      dispatch({
        type: GET_ONE_COMMERCE,
        payload: response.data,
      });
    }, error => errorLogger(error, dispatch))
);

const ALL_NO_FAVS = 'ALL_NO_FAVS';

const getAllNoFavCommerces = user => dispatch => (
  axios.get(`${BASE_URL}/commerces/notsaved`, { headers: user.headers })
    .then((response) => {
      dispatch({
        type: ALL_NO_FAVS,
        payload: response.data,
      });
    }, error => errorLogger(error, dispatch))
);

const MARK_AS_FAV = 'MARK_AS_FAV';

const FETCH_MY_FAVS = 'FETCH_MY_FAVS';

const fetchMyFavs = ({ headers }) => dispatch => (
  axios.get(`${BASE_URL}/favorites/user`, { headers })
    .then(response => dispatch({
      type: FETCH_MY_FAVS,
      payload: response.data,
    }), error => errorLogger(error, dispatch))
);

const markAsFav = ({ id, user }) => dispatch => (
  axios.post(`${BASE_URL}/favorites/create`,
    { commerce_id: id, user_id: user.current.id },
    { headers: user.headers })
    .then((response) => {
      dispatch({
        type: MARK_AS_FAV,
        payload: response.data,
      });
      console.log('user', user)
      dispatch(fetchMyFavs(user));
      dispatch(getAllNoFavCommerces(user));
    }, error => errorLogger(error, dispatch))
);

const DELETE_FAV = 'DELETE_FAV';

const deleteFav = ({ id, user }) => dispatch => (
  axios.delete(`${BASE_URL}/favorites/${id}/delete`,
    { headers: user.headers })
    .then((response) => {
      dispatch({
        type: DELETE_FAV,
        payload: response.data,
      });
      console.log('user', user)
      dispatch(fetchMyFavs(user));
      dispatch(getAllNoFavCommerces(user));
    }, error => errorLogger(error, dispatch))
);

export {
  GET_ALL_COMMERCES,
  getAllCommerces,
  GET_ONE_COMMERCE,
  getOneCommerce,
  ALL_NO_FAVS,
  getAllNoFavCommerces,
  MARK_AS_FAV,
  markAsFav,
  DELETE_FAV,
  deleteFav,
  FETCH_MY_FAVS,
  fetchMyFavs,
};
