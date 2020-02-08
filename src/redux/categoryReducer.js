import { FETCH_CATEGORIES, SET_CURRENT_FILTER } from './categoryActions';

const categoryReducer = (state = [], { type, payload }) => {
  switch (type) {
    case FETCH_CATEGORIES:
      return { ...state, all: payload };
    case SET_CURRENT_FILTER:
      return { ...state, current: payload };
    default:
      return state;
  }
};

export default categoryReducer;
