import { LOGIN_USER, SIGNUP_USER } from '../actions/authActions';

const authReducer = (state = [], action) => {
  switch (action.type) {
    case LOGIN_USER:
      return action.user;
    case SIGNUP_USER:
      return action.user;
    default:
      return state;
  }
};

export default authReducer;
