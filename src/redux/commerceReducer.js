import { GET_COMMERCES, ALL_NO_FAVS } from './commerceActions';

const commerceReducer = (state = [], { type, commerces }) => {
  switch (type) {
    case GET_COMMERCES:
      return commerces;
    case ALL_NO_FAVS:
      return commerces;
    default:
      return state;
  }
};

export default commerceReducer;
