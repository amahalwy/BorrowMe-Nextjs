import {
  RECEIVE_CURRENT_USER,
  RECEIVE_USER_LOGOUT,
  RECEIVE_USER_LOGIN,
} from "../actions/sessionActions";
import { HYDRATE } from "next-redux-wrapper";
import { State } from "../types";

const initialState: State = {
  isAuthenticated: false,
  user: {},
};

const session = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      const nextState = {
        ...state, // use previous state
        ...action.payload, // apply delta from hydration
      };
      if (state.count) nextState.count = state.count; // preserve count value on client side navigation
      return nextState;
    case RECEIVE_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !!action.currentUser,
        user: action.currentUser,
      };
    case RECEIVE_USER_LOGOUT:
      state = undefined;
      window.localStorage.removeItem("persist:root");
      return {
        isAuthenticated: false,
        user: undefined,
      };
    case RECEIVE_USER_LOGIN:
      return Object.assign({}, state, { isSignedIn: true });
    default:
      return state;
  }
};

export default session;
