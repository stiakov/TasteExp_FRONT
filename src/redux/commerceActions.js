import axios from 'axios';
import { ERROR_LOG } from './errorActions';

const errorLogger = (error, dispatch) => dispatch({ type: ERROR_LOG, error });

const BASE_URL = 'http://localhost:3000/v1';

const GET_COMMERCES = 'GET_COMMERCES';

const getCommerces = () => dispatch => (
  axios.get(`${BASE_URL}/commerces/index`)
    .then((response) => {
      dispatch({
        type: GET_COMMERCES,
        commerces: response.data,
      });
    }, error => errorLogger(error, dispatch))
);

const ALL_NO_FAVS = 'ALL_NO_FAVS';

const getAllNoFavCommerces = user => dispatch => (
  axios.get(`${BASE_URL}/commerces/notsaved`, { headers: user })
    .then((response) => {
      dispatch({
        type: ALL_NO_FAVS,
        commerces: response.data,
      });
    }, error => errorLogger(error, dispatch))
);

export {
  GET_COMMERCES,
  getCommerces,
  ALL_NO_FAVS,
  getAllNoFavCommerces,
};
