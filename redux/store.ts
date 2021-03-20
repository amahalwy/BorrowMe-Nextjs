import { createStore, applyMiddleware } from "redux";
import { createWrapper } from "next-redux-wrapper";
import thunkMiddleware from "redux-thunk";
import rootReducer from "../redux/reducers/rootReducer";
import { logger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import { PersistConfig } from "../typescript/components";

// import { createMigrate } from "redux-persist";
// const migrations = {
//   0: (state) => initialState,
// };

const initialState = {};

const makeConfiguredStore = (reducer) =>
  createStore(
    reducer,
    initialState,
    // composeWithDevTools(applyMiddleware(thunkMiddleware, logger))
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );

export const makeStore = () => {
  const isServer = typeof window === "undefined";

  if (isServer) {
    return makeConfiguredStore(rootReducer);
  } else {
    const { persistStore, persistReducer } = require("redux-persist");
    const storage = require("redux-persist/lib/storage").default;
    const persistConfig: PersistConfig = {
      key: "root",
      storage,
      // migrate: createMigrate(migrations, { debug: MIGRATION_DEBUG }),
    };

    const MIGRATION_DEBUG = false;

    const persistedReducer = persistReducer(persistConfig, rootReducer);
    const store: any = makeConfiguredStore(persistedReducer);

    store.__persistor = persistStore(store); // Nasty hack

    return store;
  }
};

export const wrapper = createWrapper(makeStore, { debug: true });
