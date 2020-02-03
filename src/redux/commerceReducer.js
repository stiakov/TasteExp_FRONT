import { GET_COMMERCES } from './commerceActions';

const commerceReducer = (state = [], { type, commerces }) => {
  switch (type) {
    case GET_COMMERCES:
      return commerces;
    default:
      return state;
  }
};

export default commerceReducer;
