import { configureStore } from "@reduxjs/toolkit";
import folderReducer from "@/redux/reducers/folder";
import linkReducer from "@/redux/reducers/link";

const store = configureStore({
  reducer: {
    folder: folderReducer,
    link: linkReducer,
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
