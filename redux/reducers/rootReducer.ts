import { HYDRATE } from "next-redux-wrapper";
import { diff } from "jsondiffpatch";
import appReducer from "./appReducer";

const rootReducer = (state, action) => {
  switch (action.type) {
    case HYDRATE:
      const nextState = {
        ...state, // use previous state
        ...action.payload, // apply delta from hydration
      };
      if (state.count) nextState.count = state.count; // preserve count value on client side navigation
      return nextState;
    default:
      return appReducer(state, action);
  }
};

export default rootReducer;
