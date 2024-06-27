/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

interface Props {
  text: string
  warn?: boolean
}

const initialState: Props = {
  text: '',
  warn: false,
}

const toastSlice = createSlice({
  name: 'toast',
  initialState,
  reducers: {
    openToast: (state, action) => {
      state.text = action.payload.text
      state.warn = action.payload.warn ?? false
    },
    closeToast: (state) => {
      state.text = ''
      state.warn = false
    },
  },
})

export const { openToast, closeToast } = toastSlice.actions

export default toastSlice.reducer
