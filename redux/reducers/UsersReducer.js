// import { RECEIVE_USER } from "../../actions/user_actions";
import { RECEIVE_CURRENT_USER } from "../actions/sessionActions";
import { RECEIVE_USER, UPDATE_USER } from "../actions/userActions";

const initialState = {
  isAuthenticated: false,
  user: {},
};

const UsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !!action.currentUser,
        user: action.currentUser,
      };
    case RECEIVE_USER:
      return {
        ...state,
        isAuthenticated: !!action.currentUser,
        user: action.user,
      };
    case UPDATE_USER:
      return {
        ...state,
        isAuthenticated: !!action.currentUser,
        user: action.user,
      };
    default:
      return state;
  }
};

export default UsersReducer;
