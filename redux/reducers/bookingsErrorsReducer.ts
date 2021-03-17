import { RECEIVE_BOOKING_ERRORS } from "../actions/bookingActions";

const _nullErrors = [];

const bookingsErrorsReducer = (state = _nullErrors, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BOOKING_ERRORS:
      return action.errors;
    default:
      return state;
  }
};

export default bookingsErrorsReducer;
