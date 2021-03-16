import { HYDRATE } from "next-redux-wrapper";
import { diff } from "jsondiffpatch";
import appReducer from "./appReducer";

const rootReducer = (state, action) => {
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
    default:
      return appReducer(state, action);
  }
};

export default rootReducer;
