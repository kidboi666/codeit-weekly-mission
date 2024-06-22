import axios from '@/src/services/axiosInstance'
import { createAsyncThunk } from '@reduxjs/toolkit'
import camelcaseKeys from 'camelcase-keys'

export const loginAccess = createAsyncThunk<any, { email: string; password: string }>(
  'user/login',
  async ({ email, password }) => {
    return axios.post(`auth/sign-in`, { email, password })
  },
)

export const checkEmailAccess = createAsyncThunk<any, string>('user/checkEmail', async (email) => {
  return axios.post(`users/check-email`, { email })
})

export const signUpAccess = createAsyncThunk<any, { email: string; password: string }>(
  'user/signUp',
  async ({ email, password }) => {
    return axios.post(`auth/sign-up`, { email, password })
  },
)

export const userInfoAccess = createAsyncThunk('user/userInfo', async () => {
  const { data } = await axios.get(`users`, {
    headers: { 'include-access-token': true },
  })
  return camelcaseKeys(data, { deep: true })
})

export const getSharedUserInfo = createAsyncThunk(
  'link/getSharedUserInfo',
  async (userId: number) => {
    const { data } = await axios.get(`users/${userId}`)
    return camelcaseKeys(data, { deep: true })
  },
)
