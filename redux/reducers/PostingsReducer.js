import {
  RECEIVE_POSTINGS,
  RECEIVE_POSTING,
  CLEAR_POSTINGS,
} from "../actions/posting_actions";

const PostingsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_POSTING:
      return Object.assign({}, state, action.posting.data);
    case RECEIVE_POSTINGS:
      return Object.assign({}, state, action.postings.data);
    case CLEAR_POSTINGS:
      return {};
    default:
      return state;
  }
};

export default PostingsReducer;
