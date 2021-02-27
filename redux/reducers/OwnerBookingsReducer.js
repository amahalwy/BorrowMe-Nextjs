import {
  RECEIVE_OWNER_BOOKINGS,
  CLEAR_BOOKINGS,
} from "../actions/booking_actions";

const OwnerBookingsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_OWNER_BOOKINGS:
      return Object.assign({}, state, action.bookings.data);
    case CLEAR_BOOKINGS:
      return {};
    default:
      return state;
  }
};

export default OwnerBookingsReducer;
