import { combineReducers } from "redux";
import link from "./link";
import { HYDRATE } from "next-redux-wrapper";

const rootReducer = combineReducers({
  index: (state = {}, action: any) => {
    switch (action.type) {
      case HYDRATE:
        return { ...state, ...action.payload };
      default:
        return state;
    }
  },
  link,
});

export default rootReducer;
