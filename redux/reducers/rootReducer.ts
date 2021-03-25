import { combineReducers } from "redux";
import entities from "./entitiesReducer";
import errors from "./errorsReducer";
import session from "./sessionReducer";

const rootReducer = combineReducers({
  entities,
  errors,
  session,
});

export default rootReducer;
