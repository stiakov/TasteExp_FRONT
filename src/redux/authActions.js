import axios from 'axios';
import { ERROR_LOG } from './errorActions';

const errorLogger = (error, dispatch) => dispatch({ type: ERROR_LOG, error });

const BASE_URL = 'http://localhost:3000/auth';

const LOGIN_USER = 'LOGIN_USER';

const loginUser = (user) => (dispatch) => axios.post(`${BASE_URL}/sign_in`, user)
  .then((response) => {
    dispatch({
      type: LOGIN_USER,
      user: { current: response.data.data, headers: response.headers },
    });
    if (user.remember) {
      localStorage.setItem('user', JSON.stringify({ current: response.data.data, headers: response.headers }));
    } else {
      sessionStorage.setItem('user', JSON.stringify({ current: response.data.data, headers: response.headers }));
    }
  }, (error) => {
    dispatch({
      type: ERROR_LOG,
      error,
    });
  });

const SIGNUP_USER = 'SIGNUP_USER';

const signupUser = (user) => (dispatch) => axios.post(`${BASE_URL}/`, user)
  .then((response) => {
    sessionStorage.setItem('user', JSON.stringify({ current: response.data.data, headers: response.headers }));
    dispatch({
      type: SIGNUP_USER,
      user: { current: response.data.data, headers: response.headers },
    });
  }, (error) => errorLogger(error, dispatch));

const SIGNOUT_USER = 'SIGNOUT_USER';

const signoutUser = (currentUser = false) => (dispatch) => {
  const user = { headers: currentUser || JSON.parse(localStorage.getItem('user')) };
  return axios.delete(`${BASE_URL}/sign_out`, user.headers)
    .then(() => {
      localStorage.removeItem('user');
      sessionStorage.removeItem('user');
      dispatch({
        type: SIGNOUT_USER,
        user: false,
      });
    }, (error) => errorLogger(error, dispatch));
};

const CHECK_SIGNED_IN = 'CHECK_SIGNED_IN';

const checkSignedIn = (currentUser = false, dispatch) => {
  let tokens = false;
  if (localStorage.user || sessionStorage.user || currentUser) {
    const user = currentUser || JSON.parse(sessionStorage.user) || JSON.parse(localStorage.user);
    tokens = user.headers;
    dispatch({
      type: CHECK_SIGNED_IN,
      user,
    });
  }
  return tokens;
};

export {
  loginUser,
  signupUser,
  signoutUser,
  checkSignedIn,
  LOGIN_USER,
  SIGNUP_USER,
  SIGNOUT_USER,
  CHECK_SIGNED_IN,
};
