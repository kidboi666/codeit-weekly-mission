import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import folderReducer from "@/src/store/reducers/folder";
import linkReducer from "@/src/store/reducers/link";
import authReducer from "@/src/store/reducers/auth";
import modalReducer from "@/src/store/reducers/modal";
import toastReducer from "@/src/store/reducers/toast";
import memoReducer from "@/src/store/reducers/memo";

const store = configureStore({
  reducer: {
    folder: folderReducer,
    link: linkReducer,
    auth: authReducer,
    modal: modalReducer,
    toast: toastReducer,
    memo: memoReducer,
  },
});

const wrapper = createWrapper(() => store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default wrapper;
/**
 * combinereducer (auto)
 * thunk (auto)
 * applyMiddleware (auto)
 * composeWithDevTools (auto)
 */
