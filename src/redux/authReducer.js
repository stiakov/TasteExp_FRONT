import {
  LOGIN_USER, SIGNUP_USER, SIGNOUT_USER, CHECK_SIGNED_IN,
} from './authActions';

const authReducer = (state = [], { type, user }) => {
  switch (type) {
    case LOGIN_USER:
      return user;
    case SIGNUP_USER:
      return user;
    case SIGNOUT_USER:
      return user;
    case CHECK_SIGNED_IN:
      return user;
    default:
      return state;
  }
};

export default authReducer;
