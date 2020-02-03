import axios from 'axios';
import { ERROR_LOG } from './errorActions';

const errorLogger = (error, dispatch) => dispatch({ type: ERROR_LOG, error });

const BASE_URL = 'http://localhost:3000/v1';

const GET_COMMERCES = 'GET_COMMERCES';

const getCommerces = () => dispatch =>
  axios.get(`${BASE_URL}/commerces/index`)
    .then((response) => {
      console.log(response);
      dispatch({
        type: GET_COMMERCES,
        commerces: response.data,
      });
    }, error => errorLogger(error, dispatch));


export { GET_COMMERCES, getCommerces };