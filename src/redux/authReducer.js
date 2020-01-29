import { LOGIN_USER, SIGNUP_USER } from './authActions';

const authReducer = (state = [], { type, user }) => {
  switch (type) {
    case LOGIN_USER:
      return user;
    case SIGNUP_USER:
      return user;
    default:
      return state;
  }
};

export default authReducer;
