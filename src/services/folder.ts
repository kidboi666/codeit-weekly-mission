import axios from '@/src/services/axiosInstance'
import { createAsyncThunk } from '@reduxjs/toolkit'
import camelcaseKeys from 'camelcase-keys'

// export const getFolder = createAsyncThunk('folder/getFolder', async () => {
//   const { data } = await axios.get(`folders`, {
//     headers: { 'include-access-token': true },
//   })
//   return camelcaseKeys(data, { deep: true })
// })

export const getFolder = async () => {
  const { data } = await axios.get(`folders`, {
    headers: { 'include-access-token': true },
  })
  return camelcaseKeys(data, { deep: true })
}

export const postFolder = createAsyncThunk<any, string>('folder/postFolder', async (folderName) => {
  const { data } = await axios.post(`folders`, {
    headers: { 'include-access-token': true },
    name: folderName,
  })
  return camelcaseKeys(data, { deep: true })
})

// export const getSharedFolder = createAsyncThunk<any, number>(
//   'link/getSharedFolder',
//   async (folderId) => {
//     const { data } = await axios.get(`folders/${folderId}`)
//     return camelcaseKeys(data, { deep: true })
//   },
// )

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

export const deleteFolder = createAsyncThunk<any, number>(
  'folder/deleteFolder',
  async (folderId) => {
    const { data } = await axios.delete(`folders/${folderId}`, {
      headers: { 'include-access-token': true },
    })

    return data
  },
)
