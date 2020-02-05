import { FETCH_MY_FAVS } from './fetchFavoriteActions';

const fetchFavoriteReducer = (state = [], { type, favorite }) => {
  switch (type) {
    case FETCH_MY_FAVS:
      return favorite;
    default:
      return state;
  }
};

export default fetchFavoriteReducer;
