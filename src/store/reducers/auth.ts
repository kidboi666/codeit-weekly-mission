/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
import { UserData } from '@/src/types'

interface Props {
  isLoggedIn: boolean
  me: UserData
}

const initialState: Props = {
  isLoggedIn: false,
  me: {
    id: 0,
    createdAt: '',
    name: '',
    imageSource: '',
    email: '',
    authId: '',
  },
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state) => {
      state.isLoggedIn = true
    },
    logout: (state) => {
      state.isLoggedIn = false
      localStorage.clear()
    },
    saveMe: (state, action) => {
      state.isLoggedIn = true
      state.me = action.payload?.[0]
    },
  },
})

export const { login, logout, saveMe } = authSlice.actions

export default authSlice.reducer
