import { combineReducers } from "redux";
import entities from "./EntitiesReducer";
import session from "./SessionReducer";
import errors from "./ErrorsReducer";

const RootReducer = combineReducers({
  entities,
  session,
  errors,
});

export default RootReducer;
