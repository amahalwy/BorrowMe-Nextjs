import appReducer from "./appReducer";

const rootReducer = (state, action) => {
  if (action.RECEIVE_USER_LOGOUT) {
    state = undefined;
    window.localStorage.removeItem("persist:root");
    //  const { routing } = state;
    //  state = { routing };
  }
  return appReducer(state, action);
};

export default rootReducer;
