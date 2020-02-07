import axios from 'axios';
import { ERROR_LOG } from './errorActions';

const errorLogger = (error, dispatch) => dispatch({ type: ERROR_LOG, error });

const BASE_URL = 'http://localhost:3000/v1';

const FETCH_CATEGORIES = 'FETCH_CATEGORIES';

const fetchCategories = () => dispatch => (
  axios.get(`${BASE_URL}/categories`)
    .then(response => dispatch({
      type: FETCH_CATEGORIES,
      payload: response.data,
    }), error => errorLogger(error, dispatch))
);

export {
  FETCH_CATEGORIES,
  fetchCategories,
};
