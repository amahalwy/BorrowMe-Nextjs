import { HYDRATE } from "next-redux-wrapper";

export interface State {
  server: any;
  client: any;
}

const stateReducer = (state: State = { tick: "init" }, action: any) => {
  switch (action.type) {
    case HYDRATE:
      return {
        ...state,
        server: {
          ...state.server,
          ...action.payload.server,
        },
      };
    case "SERVER_ACTION":
      return {
        ...state,
        server: {
          ...state.server,
          tick: action.payload,
        },
      };
    case "CLIENT_ACTION":
      return {
        ...state,
        client: {
          ...state.client,
          tick: action.payload,
        },
      };
    default:
      return state;
  }
};
