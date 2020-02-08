import axios from 'axios';
import { ERROR_LOG } from './errorActions';

const errorLogger = (error, dispatch) => dispatch({ type: ERROR_LOG, error });

const BASE_URL = 'http://localhost:3000/auth';

const LOGIN_USER = 'LOGIN_USER';
const SIGNUP_USER = 'SIGNUP_USER';
const SIGNOUT_USER = 'SIGNOUT_USER';
const CHECK_SIGNED_IN = 'CHECK_SIGNED_IN';

const loginTaskObj = response => ({
  type: LOGIN_USER,
  user: { current: response.data.data, headers: response.headers },
});

const signupTaskObj = response => ({
  type: SIGNUP_USER,
  user: { current: response.data.data, headers: response.headers },
});

const signoutTaskObj = () => ({
  type: SIGNOUT_USER,
  user: false,
});

const checkSignedInTaskObj = user => ({
  type: CHECK_SIGNED_IN,
  user,
});

const loginUser = user => dispatch => axios.post(`${BASE_URL}/sign_in`, user)
  .then((response) => {
    dispatch(loginTaskObj(response));

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


const signupUser = user => dispatch => axios.post(`${BASE_URL}`, user)
  .then((response) => {
    sessionStorage.setItem('user', JSON.stringify({ current: response.data.data, headers: response.headers }));
    dispatch(signupTaskObj(response));
  }, error => errorLogger(error, dispatch));

const signoutUser = (currentUser = false) => (dispatch) => {
  const user = { headers: currentUser || JSON.parse(localStorage.getItem('user')) };
  return axios.delete(`${BASE_URL}/sign_out`, user.headers)
    .then(() => {
      localStorage.removeItem('user');
      sessionStorage.removeItem('user');
      dispatch(signoutTaskObj(currentUser));
    }, error => errorLogger(error, dispatch));
};

const checkSignedIn = (currentUser = false, dispatch) => {
  let user = {};
  let tokens = false;

  if (localStorage.user || sessionStorage.user || currentUser) {
    if (typeof localStorage.user === 'string' && localStorage.user.length > 0) {
      user = JSON.parse(localStorage.user);
    }

    if (typeof sessionStorage.user === 'string' && sessionStorage.user.length > 0) {
      user = JSON.parse(sessionStorage.user);
    }

    if (currentUser) user = currentUser;

    tokens = user.headers || false;

    dispatch(checkSignedInTaskObj(user));
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
