import { RECEIVE_USER_ERRORS } from "../actions/userActions";

const _nullErrors = [];

const usersErrorsReducer = (state = _nullErrors, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER_ERRORS:
      return action.errors;
    default:
      return state;
  }
};

export default usersErrorsReducer;
