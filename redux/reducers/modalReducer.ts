import { CLICK_POSTING, CLEAR_MODAL, SUCCESS } from "../actions/postingActions";
import { UPDATE_SUCCESS } from "../actions/userActions";
import { CLICK_BOOKING } from "../actions/bookingActions";
import { CLICK_REQUEST } from "../actions/requestActions";

const modalReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case CLICK_POSTING:
      return Object.assign({}, state, action.posting.data);
    case CLICK_BOOKING:
      return Object.assign({}, state, action.booking.data);
    case CLICK_REQUEST:
      return Object.assign({}, state, action.request.data);
    case CLEAR_MODAL:
      return {};
    case SUCCESS:
      return Object.assign({}, state, { res: action.status });
    case UPDATE_SUCCESS:
      return Object.assign({}, state, { res: action.status });
    default:
      return state;
  }
};

export default modalReducer;
