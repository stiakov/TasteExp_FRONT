import { ERROR_LOG } from './errorActions';

const errorReducer = (state = [], { type, error }) => {
  switch (type) {
    case ERROR_LOG:
      return { ...state, error };
    default:
      return state;
  }
};

export default errorReducer;
