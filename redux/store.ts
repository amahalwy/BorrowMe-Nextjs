import jwt_decode from "jwt-decode";
import { useMemo } from "react";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers/rootReducer";
import { setAuthToken } from "./util/sessionApiUtil";
import thunk from "redux-thunk";

let store;

const initialState = {};

export const initStore = (preloadedState = initialState) => {
  return createStore(
    rootReducer,
    preloadedState,
    composeWithDevTools(applyMiddleware(thunk))
  );
};

export const initializeStore = (preloadedState) => {
  let _store = store ?? initStore(preloadedState);
  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    });
    store = undefined;
  }

  // For SSG and SSR always create a new store
  if (typeof window === "undefined") {
    return _store;
  } else {
    if (localStorage.jwtToken) {
      // Set the token as a common header for all axios requests
      setAuthToken(localStorage.jwtToken);

      // Decode the token to obtain the user's information
      const decodedUser = jwt_decode(localStorage.jwtToken);

      // Create a preconfigured state we can immediately add to our store
      preloadedState = {
        session: { isAuthenticated: true, user: decodedUser },
      };
      _store = initStore(preloadedState);
    } else {
      // If this is a first time user, start with an empty store
      _store = createStore(
        rootReducer,
        preloadedState,
        composeWithDevTools(applyMiddleware(thunk))
      );
    }
  }

  // Create the store once in the client
  if (!store) store = _store;
  return _store;
};

export const useStore = (initialState) => {
  const store = useMemo(() => initializeStore(initialState), [initialState]);
  return store;
};
