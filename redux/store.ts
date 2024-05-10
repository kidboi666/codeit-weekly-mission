import { configureStore } from "@reduxjs/toolkit";
import folderReducer from "@/redux/reducers/folder";
import linkReducer from "@/redux/reducers/link";
import authReducer from "@/redux/reducers/auth";
import { createWrapper } from "next-redux-wrapper";
import modalReducer from "@/redux/reducers/modal";
import toastReducer from "@/redux/reducers/toast";

const store = configureStore({
  reducer: {
    folder: folderReducer,
    link: linkReducer,
    auth: authReducer,
    modal: modalReducer,
    toast: toastReducer,
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
