import { combineReducers } from "redux";
import SessionErrorsReducer from "./sessionErrorsReducer";
import PostingsErrorsReducer from "./postingsErrorsReducer";
import RequestsErrorsReducer from "./postingsErrorsReducer";
import BookingsErrorsReducer from "./postingsErrorsReducer";
import UsersErrorsReducer from "./usersErrorsReducer";

export default combineReducers({
  session: SessionErrorsReducer,
  user: UsersErrorsReducer,
  postings: PostingsErrorsReducer,
  requests: RequestsErrorsReducer,
  bookings: BookingsErrorsReducer,
});
