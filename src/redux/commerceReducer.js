import {
  GET_ALL_COMMERCES,
  GET_ONE_COMMERCE,
  ALL_NO_FAVS,
  MARK_AS_FAV,
  DELETE_FAV,
  FETCH_MY_FAVS,
  FILTER_COMMERCES,
  FILTER_FAVORITES,
} from './commerceActions';

const commerceReducer = (state = [], { type, payload }) => {
  switch (type) {
    case GET_ALL_COMMERCES:
      return { ...state, all: payload };
    case GET_ONE_COMMERCE:
      return { ...state, showOne: payload };
    case ALL_NO_FAVS:
      return { ...state, noFavorites: payload };
    case FETCH_MY_FAVS:
      return { ...state, favorites: payload };
    case MARK_AS_FAV:
      return { ...state, favorites: [payload, ...state.favorites] };
    case DELETE_FAV:
      return { ...state, favorites: state.favorites.filter(item => item !== payload) };
    case FILTER_COMMERCES:
      return { ...state, noFavorites: payload };
    case FILTER_FAVORITES:
      return { ...state, favorites: payload };
    default:
      return state;
  }
};

export default commerceReducer;
