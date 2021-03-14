import { combineReducers } from "redux";
import sessionErrorsReducer from "./sessionErrorsReducer";
import usersErrorsReducer from "./usersErrorsReducer";
import postingsErrorsReducer from "./postingsErrorsReducer";
import requestsErrorsReducer from "./postingsErrorsReducer";
import bookingsErrorsReducer from "./postingsErrorsReducer";

export default combineReducers({
  session: sessionErrorsReducer,
  user: usersErrorsReducer,
  postings: postingsErrorsReducer,
  requests: requestsErrorsReducer,
  bookings: bookingsErrorsReducer,
});
