import { combineReducers } from "redux";
import users from "./UsersReducer";
import postings from "./PostingsReducer";
import requestorRequests from "./RequestorRequestsReducer";
import receiverRequests from "./ReceiverRequestsReducer";
import ownerBookings from "./OwnerBookingsReducer";
import renterBookings from "./RenterBookingsReducer";
import modal from "./ModalReducer.js";
import map from "./MapReducer";

export default combineReducers({
  users,
  postings,
  requestorRequests,
  receiverRequests,
  ownerBookings,
  renterBookings,
  modal,
  map,
});
