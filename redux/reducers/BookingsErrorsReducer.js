import { RECEIVE_BOOKING_ERRORS } from "../actions/booking_actions";

const _nullErrors = [];

const BookingsErrorsReducer = (state = _nullErrors, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BOOKING_ERRORS:
      return action.errors;
    default:
      return state;
  }
};

export default BookingsErrorsReducer;
