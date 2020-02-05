import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import commerceReducer from './commerceReducer';
import favoriteReducer from './favoriteReducer';
import fetchFavoriteReducer from './fetchFavoriteReducer';


const rootReducer = combineReducers({
  user: authReducer,
  error: errorReducer,
  commerces: commerceReducer,
  markedFavs: favoriteReducer,
  fetchedFavs: fetchFavoriteReducer,
});

export default rootReducer;
