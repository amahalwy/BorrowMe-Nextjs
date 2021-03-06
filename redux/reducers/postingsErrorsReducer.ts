import {
  RECEIVE_POST_ERRORS,
  CLEAR_POSTING_ERRORS,
} from "../actions/postingActions";

const _nullErrors = [];

const postingsErrorsReducer = (state = _nullErrors, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_POST_ERRORS:
      return action.errors;
    case CLEAR_POSTING_ERRORS:
      return _nullErrors;
    default:
      return state;
  }
};

export default postingsErrorsReducer;
