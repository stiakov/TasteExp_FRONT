import axios from 'axios';
import { ERROR_LOG } from './errorActions';
import { fetchMyFavs } from './fetchFavoriteActions';
import { getAllNoFavCommerces } from './commerceActions';

const errorLogger = (error, dispatch) => dispatch({ type: ERROR_LOG, error });

const BASE_URL = 'http://localhost:3000/v1';

const MARK_AS_FAV = 'MARK_AS_FAV';

const markAsFav = ({ id, user }) => dispatch => (
  axios.post(`${BASE_URL}/favorites/create`,
    { commerce_id: id, user_id: user.current.id },
    { headers: user.headers })
    .then((response) => {
      dispatch({
        type: MARK_AS_FAV,
        favorite: response.data,
      });
      dispatch(fetchMyFavs(user));
      dispatch(getAllNoFavCommerces(user.headers));
    }, error => errorLogger(error, dispatch))
);

const DELETE_FAV = 'DELETE_FAV';

const deleteFav = ({ id, user }) => dispatch => (
  axios.delete(`${BASE_URL}/favorites/${id}/delete`,
    { headers: user.headers })
    .then((response) => {
      dispatch({
        type: DELETE_FAV,
        favorite: response.data,
      });
      dispatch(fetchMyFavs(user));
      dispatch(getAllNoFavCommerces(user.headers));
    }, error => errorLogger(error, dispatch))
);

export {
  MARK_AS_FAV,
  markAsFav,
  DELETE_FAV,
  deleteFav,
};
