import {
  RECEIVE_CURRENT_USER,
  RECEIVE_USER_LOGOUT,
  RECEIVE_USER_LOGIN,
} from "../actions/sessionActions";
import { HYDRATE } from "next-redux-wrapper";
import { diff } from "jsondiffpatch";
import appReducer from "./appReducer";

const rootReducer = (state, action) => {
  switch (action.typ) {
    case HYDRATE:
      const stateDiff = diff(state, action.payload) as any;
      const wasBumpedOnClient = stateDiff?.page?.[0]?.endsWith("X");
      return {
        ...state,
        ...action.payload,
        page: wasBumpedOnClient ? state.page : action.payload.page,
      };
    case RECEIVE_USER_LOGOUT:
      state = undefined;
      window.localStorage.removeItem("persist:root");
    //  const { routing } = state;
    //  state = { routing };
    default:
      return appReducer(state, action);
  }
};

export default rootReducer;
