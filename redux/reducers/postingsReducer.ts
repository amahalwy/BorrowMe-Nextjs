import {
  RECEIVE_POSTINGS,
  RECEIVE_POSTING,
  CLEAR_POSTINGS,
} from "../actions/postingActions";

const postingsReducer = (
  state: {} | any = {},
  action: { type: any; posting: { data: any }; postings: { data: any } }
) => {
  switch (action.type) {
    case RECEIVE_POSTING:
      return Object.assign({}, state, action.posting.data);
    case RECEIVE_POSTINGS:
      const postings = action.postings;
      return {
        ...state,
        ...postings,
      };
    case "RECEIVE_SEARCH":
      const search = action.postings;
      return {
        ...search,
      };
    case CLEAR_POSTINGS:
      return {};
    default:
      return state;
  }
};

export default postingsReducer;
