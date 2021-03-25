import { HYDRATE } from "next-redux-wrapper";
import appReducer from "./appReducer";
import { diff } from "jsondiffpatch";
import { REHYDRATE } from "redux-persist";

const rootReducer = (state, action) => {
  switch (action.type) {
    // case HYDRATE:
    //   return {
    //     ...state,
    //     ...action.payload,
    //   };
    default:
      return appReducer(state, action);
  }
};

export default rootReducer;
