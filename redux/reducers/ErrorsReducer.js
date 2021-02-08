import { combineReducers } from "redux";

import SessionErrorsReducer from "./SessionErrorsReducer";
import PostingsErrorsReducer from "./PostingsErrorsReducer";
import RequestsErrorsReducer from "./PostingsErrorsReducer";
import BookingsErrorsReducer from "./PostingsErrorsReducer";
import UsersErrorsReducer from "./UsersErrorsReducer";

export default combineReducers({
  session: SessionErrorsReducer,
  user: UsersErrorsReducer,
  postings: PostingsErrorsReducer,
  requests: RequestsErrorsReducer,
  bookings: BookingsErrorsReducer,
});
