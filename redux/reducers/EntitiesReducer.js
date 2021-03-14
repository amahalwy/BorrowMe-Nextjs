import { combineReducers } from "redux";
import users from "./usersReducer";
import postings from "./postingsReducer";
import requestorRequests from "./requestorRequestsReducer";
import receiverRequests from "./receiverRequestsReducer";
import ownerBookings from "./ownerBookingsReducer";
import renterBookings from "./renterBookingsReducer";
import modal from "./modalReducer.js";
import map from "./mapReducer";

const entitiesReducer = combineReducers({
  users,
  postings,
  requestorRequests,
  receiverRequests,
  ownerBookings,
  renterBookings,
  modal,
  map,
});

export default entitiesReducer;
