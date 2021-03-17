import { combineReducers } from "redux";
import entities from "./entitiesReducer";
import errors from "./errorsReducer";
import session from "./sessionReducer";

const appReducer = combineReducers({
  entities,
  errors,
  session,
});

export default appReducer;
