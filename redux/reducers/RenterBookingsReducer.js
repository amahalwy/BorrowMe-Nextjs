import {
  RECEIVE_RENTER_BOOKINGS,
  CLEAR_BOOKINGS,
} from "../actions/bookingActions";

const renterBookingsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_RENTER_BOOKINGS:
      return Object.assign({}, state, action.bookings.data);
    case CLEAR_BOOKINGS:
      return {};
    default:
      return state;
  }
};

export default renterBookingsReducer;
