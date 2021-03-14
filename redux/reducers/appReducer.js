import { combineReducers } from "redux";
import entitiesReducer from "./entitiesReducer";
import sessionReducer from "./sessionReducer";
import errorsReducer from "./errorsReducer";

const appReducer = combineReducers({
  entitiesReducer,
  sessionReducer,
  errorsReducer,
});

export default appReducer;
