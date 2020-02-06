import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import commerceReducer from './commerceReducer';

const rootReducer = combineReducers({
  user: authReducer,
  error: errorReducer,
  commerces: commerceReducer,
});

export default rootReducer;
