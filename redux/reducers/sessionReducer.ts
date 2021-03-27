import {
  RECEIVE_CURRENT_USER,
  RECEIVE_USER_LOGOUT,
  RECEIVE_USER_LOGIN,
} from "../actions/sessionActions";
import { State } from "../types";

const initialState: State = {
  isAuthenticated: false,
  user: {},
};

const session = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return {
        isAuthenticated: !!action.currentUser,
        user: action.currentUser,
      };
    case RECEIVE_USER_LOGOUT:
      return {
        isAuthenticated: false,
      };
    case RECEIVE_USER_LOGIN:
      return Object.assign({}, state, { isSignedIn: true });
    default:
      return state;
  }
};

export default session;
