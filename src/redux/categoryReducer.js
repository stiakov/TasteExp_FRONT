import { FETCH_CATEGORIES } from './categoryActions';

const categoryReducer = (state = [], { type, payload }) => {
  switch (type) {
    case FETCH_CATEGORIES:
      return { ...state, all: payload };
    default:
      return state;
  }
};

export default categoryReducer;
