import { configureStore } from "@reduxjs/toolkit";
import folderReducer from "@/redux/reducers/folder";
import linkReducer from "@/redux/reducers/link";
import userReducer from "@/redux/reducers/user";

const store = configureStore({
  reducer: {
    folder: folderReducer,
    link: linkReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
/**
 * combinereducer (auto)
 * thunk (auto)
 * applyMiddleware (auto)
 * composeWithDevTools (auto)
 */
