import axios from 'axios';

const BASE_URL = 'http://localhost:3000/auth';

const LOGIN_USER = 'LOGIN_USER';

const loginUser = (user) => (dispatch) => axios.post(`${BASE_URL}/sign_in`, user)
  .then((response) => {
    dispatch({
      type: LOGIN_USER,
      user: response.data.data,
    });
    localStorage.setItem('headers', JSON.stringify(response.headers));
  });

const SIGNUP_USER = 'SIGNUP_USER';

const signupUser = (user) => (dispatch) => axios.post(`${BASE_URL}/`, user)
  .then((response) => {
    dispatch({
      type: SIGNUP_USER,
      user: response.data.data,
    });
    localStorage.setItem('headers', JSON.stringify(response.headers));
  });

export {
  loginUser,
  signupUser,
  LOGIN_USER,
  SIGNUP_USER,
};
