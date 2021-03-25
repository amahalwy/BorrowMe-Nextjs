import { createStore, applyMiddleware } from "redux";
import { createWrapper } from "next-redux-wrapper";
import thunkMiddleware from "redux-thunk";
import rootReducer from "../redux/reducers/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { logger } from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import { State } from "./types";

// import { createMigrate } from "redux-persist";
// const migrations = {
//   0: (state) => initialState,
// };

const initialState = {};

export const makeConfiguredStore = (reducer) =>
  createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );

export const makeStore = () => {
  const isServer = typeof window === "undefined";

  if (isServer) {
    return makeConfiguredStore(rootReducer);
  } else {
    const storage: Storage = require("redux-persist/lib/storage").default;
    const persistConfig = {
      key: "root",
      storage,
      stateReconciler: autoMergeLevel2,
      // whitelist: ["*"],
      // migrate: createMigrate(migrations, { debug: MIGRATION_DEBUG }),
    };

    const persistedReducer = persistReducer(persistConfig, rootReducer);
    const store: any = makeConfiguredStore(persistedReducer);

    store.__persistor = persistStore(store);

    return store;
  }
};

export const wrapper = createWrapper(makeStore);
