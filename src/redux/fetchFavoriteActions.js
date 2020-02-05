import axios from 'axios';
import { ERROR_LOG } from './errorActions';

const errorLogger = (error, dispatch) => dispatch({ type: ERROR_LOG, error });

const BASE_URL = 'http://localhost:3000/v1';

const FETCH_MY_FAVS = 'FETCH_MY_FAVS';

const fetchMyFavs = ({ headers }) => dispatch => (
  axios.get(`${BASE_URL}/favorites/user`, { headers })
    .then(response => dispatch({
      type: FETCH_MY_FAVS,
      favorite: response.data,
    }), error => errorLogger(error, dispatch))
);

export {
  FETCH_MY_FAVS,
  fetchMyFavs,
};
