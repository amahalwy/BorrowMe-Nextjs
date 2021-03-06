import {
  RECEIVE_BOOKING,
  REMOVE_BOOKING,
  CLEAR_BOOKINGS,
} from "../actions/bookingActions";

const bookingsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BOOKING:
      return Object.assign({}, state, action.booking.data);
    case REMOVE_BOOKING:
      let newState = Object.assign({}, state);
      delete newState[action.bookingId];
      return newState;
    case CLEAR_BOOKINGS:
      return {};
    default:
      return state;
  }
};

export default bookingsReducer;
