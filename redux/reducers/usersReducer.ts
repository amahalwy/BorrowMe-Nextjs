// import { RECEIVE_USER } from "../../actions/user_actions";
import { RECEIVE_CURRENT_USER } from "../actions/sessionActions";
import { RECEIVE_USER, UPDATE_USER, CLEAR_USERS } from "../actions/userActions";

const usersReducer = (state = {}, action) => {
  switch (action.type) {
    // case RECEIVE_CURRENT_USER:
    //   return {
    //     ...state,
    //     isAuthenticated: !!action.currentUser,
    //     user: action.currentUser,
    //   };
    // case RECEIVE_USER:
    //   return {
    //     ...state,
    //     isAuthenticated: !!action.currentUser,
    //     user: action.user,
    //   };
    // case UPDATE_USER:
    //   return {
    //     ...state,
    //     isAuthenticated: !!action.currentUser,
    //     user: action.user,
    //   };
    case CLEAR_USERS:
      return {};
    default:
      return state;
  }
};

export default usersReducer;
