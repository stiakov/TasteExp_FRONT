import { combineReducers } from 'redux';
import authReducer from './authReducer';

const rootReducer = combineReducers({ user: authReducer, filter: '' });

export default rootReducer;
