import { createStore, applyMiddleware } from "redux";
import { createWrapper } from "next-redux-wrapper";
import thunkMiddleware from "redux-thunk";
import rootReducer from "../redux/reducers/rootReducer";
import { logger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
// import { createMigrate } from "redux-persist";

const initialState = {};

// const migrations = {
//   0: (state) => initialState,
// };

const makeConfiguredStore = (reducer) =>
  createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware, logger))
  );

const makeStore = () => {
  const isServer = typeof window === "undefined";

  if (isServer) {
    return makeConfiguredStore(rootReducer);
  } else {
    const { persistStore, persistReducer } = require("redux-persist");
    const storage = require("redux-persist/lib/storage").default;

    const MIGRATION_DEBUG = false;

    const persistConfig = {
      key: "root",
      storage,
      // migrate: createMigrate(migrations, { debug: MIGRATION_DEBUG }),
    };

    const persistedReducer = persistReducer(persistConfig, rootReducer);
    const store = makeConfiguredStore(persistedReducer);

    store.__persistor = persistStore(store); // Nasty hack

    return store;
  }
};

export const wrapper = createWrapper(makeStore, { debug: true });
