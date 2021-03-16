import {
  RECEIVE_CURRENT_USER,
  RECEIVE_USER_LOGOUT,
  RECEIVE_USER_LOGIN,
} from "../actions/sessionActions";
import { HYDRATE } from "next-redux-wrapper";
import { diff } from "jsondiffpatch";

interface State {
  isAuthenticated: boolean;
  user: {};
  page?: any;
}

const initialState: State = {
  isAuthenticated: false,
  user: {},
};

const session = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      console.log(action);
      const stateDiff = diff(state, action.payload) as any;
      const wasBumpedOnClient = stateDiff?.page?.[0]?.endsWith("X");
      return {
        ...state,
        ...action.payload,
        page: wasBumpedOnClient ? state.page : action.payload.page,
      };
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
