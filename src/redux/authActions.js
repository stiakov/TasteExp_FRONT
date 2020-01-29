import axios from 'axios';
import { ERROR_LOG } from './errorActions';

const errorLogger = (error, dispatch) => dispatch({ type: ERROR_LOG, error });

const BASE_URL = 'http://localhost:3000/auth';

const LOGIN_USER = 'LOGIN_USER';

const loginUser = (user) => (dispatch) => axios.post(`${BASE_URL}/sign_in`, user)
  .then((response) => {
    dispatch({
      type: LOGIN_USER,
      user: response.data.data,
    });
    localStorage.setItem('headers', JSON.stringify(response.headers));
  }, (error) => {
    dispatch({
      type: ERROR_LOG,
      error,
    });
  });

const SIGNUP_USER = 'SIGNUP_USER';

const signupUser = (user) => (dispatch) => axios.post(`${BASE_URL}/`, user)
  .then((response) => {
    dispatch({
      type: SIGNUP_USER,
      user: response.data.data,
    });
    localStorage.setItem('headers', JSON.stringify(response.headers));
  }, (error) => errorLogger(error, dispatch));

const SIGNOUT_USER = 'SIGNOUT_USER';

const signoutUser = (user) => (dispatch) => axios.post(`${BASE_URL}/`, user)
  .then((response) => {
    dispatch({
      type: SIGNOUT_USER,
      user: response.data.data,
    });
    localStorage.setItem('headers', JSON.stringify(response.headers));
  }, (error) => errorLogger(error, dispatch));

export {
  loginUser,
  signupUser,
  signoutUser,
  LOGIN_USER,
  SIGNUP_USER,
  SIGNOUT_USER,
};
