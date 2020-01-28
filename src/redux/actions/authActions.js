const LOGIN_USER = 'LOGIN_USER';

const loginUser = (user) => ({
  type: LOGIN_USER,
  user,
});

const SIGNUP_USER = 'SIGNUP_USER';

const signupUser = (user) => ({
  type: SIGNUP_USER,
  user,
});

export {
  loginUser,
  signupUser,
  LOGIN_USER,
  SIGNUP_USER,
};
