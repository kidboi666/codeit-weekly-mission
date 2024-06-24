/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
import { ReactNode } from 'react'

interface Props {
  modalElement: ReactNode
  isOpen: boolean
}

const initialState: Props = {
  modalElement: null,
  isOpen: false,
}

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.modalElement = action.payload
      state.isOpen = true
    },
    closeModal: (state) => {
      state.modalElement = null
      state.isOpen = false
    },
  },
})

export const { openModal, closeModal } = modalSlice.actions

export default modalSlice.reducer
