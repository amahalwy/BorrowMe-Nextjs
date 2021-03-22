import {
  RECEIVE_POSTINGS,
  RECEIVE_POSTING,
  CLEAR_POSTINGS,
} from "../actions/postingActions";
import { HYDRATE } from "next-redux-wrapper";
import { diff } from "jsondiffpatch";

const postingsReducer = (state: { page?: any } = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case HYDRATE:
      console.log(state, action.payload);
      const stateDiff = diff(state, action.payload) as any;
      const wasBumpedOnClient = stateDiff?.page?.[0]?.endsWith("X");
      return {
        ...state,
        ...action.payload,
        page: wasBumpedOnClient ? state.page : action.payload.page,
      };
    case RECEIVE_POSTING:
      return Object.assign({}, state, action.posting.data);
    case RECEIVE_POSTINGS:
      return Object.assign({}, state, action.postings);
    case CLEAR_POSTINGS:
      return {};
    default:
      return state;
  }
};

export default postingsReducer;
