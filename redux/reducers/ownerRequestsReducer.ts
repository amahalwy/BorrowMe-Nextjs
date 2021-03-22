import {
  OWNER_REQUESTS,
  RECEIVE_REQUEST,
  REMOVE_REQUEST,
  CLEAR_REQUESTS,
} from "../actions/requestActions";

const ownerRequests = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case OWNER_REQUESTS:
      return Object.assign({}, state, action.requests.data);
    case RECEIVE_REQUEST:
      return Object.assign({}, state, action.request.data);
    case REMOVE_REQUEST:
      let newState = Object.assign({}, state);
      delete newState[action.requestId];
      return newState;
    case CLEAR_REQUESTS:
      return {};
    default:
      return state;
  }
};

export default ownerRequests;
