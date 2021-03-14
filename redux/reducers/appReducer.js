import { combineReducers } from "redux";
import entities from "./entitiesReducer";
import session from "./sessionReducer";
import errors from "./errorsReducer";

const appReducer = combineReducers({
  entities,
  session,
  errors,
});

export default appReducer;
