import { MARK_AS_FAV, DELETE_FAV } from './favoriteActions';

const favoriteReducer = (state = [], { type, favorite }) => {
  switch (type) {
    case MARK_AS_FAV:
      return [...state, favorite];
    case DELETE_FAV:
      return state.filter(item => item.commerce.id !== favorite.commerce.id);
    default:
      return state;
  }
};

export default favoriteReducer;
