import axios from '@/src/services/axiosInstance'
import { createAsyncThunk } from '@reduxjs/toolkit'
import camelcaseKeys from 'camelcase-keys'

export const getFolder = async () => {
  const { data } = await axios.get(`folders`, {
    headers: { 'include-access-token': true },
  })
  return camelcaseKeys(data, { deep: true })
}

export const postFolder = async (name: string) => {
  return axios.post(`folders`, { headers: { 'include-access-token': true }, name })
}

export const getSharedFolder = async (folderId: number) => {
  const { data } = await axios.get(`folders/${folderId}`)
  return camelcaseKeys(data, { deep: true })
}

export const putFolder = createAsyncThunk<any, { folderName: string; folderId: number }>(
  'folder/putFolder',
  async ({ folderName, folderId }) => {
    const { data } = await axios.put(`folders/${folderId}`, {
      headers: { 'include-access-token': true },
      name: folderName,
    })
    return camelcaseKeys(data.data, { deep: true })
  },
)

export const deleteFolder = async (folderId: number) => {
  const result = axios.delete(`folders/${folderId}`, {
    headers: { 'include-access-token': true },
  })
  return result
}
