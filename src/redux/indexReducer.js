import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import commerceReducer from './commerceReducer';
import categoryReducer from './categoryReducer';

const rootReducer = combineReducers({
  user: authReducer,
  error: errorReducer,
  commerces: commerceReducer,
  filters: categoryReducer,
});

export default rootReducer;
