import { RECEIVE_REQUEST_ERRORS } from "../actions/requestActions";

const _nullErrors = [];

const requestsErrorsReducer = (state = _nullErrors, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_REQUEST_ERRORS:
      return action.errors;
    default:
      return state;
  }
};

export default requestsErrorsReducer;
