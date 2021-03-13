import {
  RECEIVE_CURRENT_USER,
  RECEIVE_USER_LOGOUT,
  RECEIVE_USER_LOGIN,
} from "../actions/sessionActions";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  isAuthenticated: false,
  user: {},
};

const SessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      const stateDiff = diff(state, action.payload);
      const wasBumpedOnClient = stateDiff?.page?.[0]?.endsWith("X"); // or any other criteria
      return {
        ...state,
        ...action.payload,
        page: wasBumpedOnClient ? state.page : action.payload.page, // keep existing state or use hydrated
      };
    case RECEIVE_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !!action.currentUser,
        user: action.currentUser,
      };
    case RECEIVE_USER_LOGOUT:
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

export default SessionReducer;
