import { configureStore } from "@reduxjs/toolkit";
import folderReducer from "@/redux/reducers/folderReducer";

const store = configureStore({
  reducer: {
    folder: folderReducer,
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
