import { configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'
import folderReducer from '@/src/store/reducers/folder'
import authReducer from '@/src/store/reducers/auth'
import modalReducer from '@/src/store/reducers/modal'
import toastReducer from '@/src/store/reducers/toast'

const store = configureStore({
  reducer: {
    folder: folderReducer,
    auth: authReducer,
    modal: modalReducer,
    toast: toastReducer,
  },
})

const wrapper = createWrapper(() => store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default wrapper
/**
 * combinereducer (auto)
 * thunk (auto)
 * applyMiddleware (auto)
 * composeWithDevTools (auto)
 */
