import axios from '@/src/services/axiosInstance'
import { createAsyncThunk } from '@reduxjs/toolkit'
import camelcaseKeys from 'camelcase-keys'
import { Link } from '@/src/types'

export const getLinkList = createAsyncThunk('link/getLinkList', async (folderId: number) => {
  const { data } = await axios.get(`folders/${folderId ? `${folderId}` : ''}/links`)
  return camelcaseKeys(data, { deep: true })
})

export const getAllLinkList = createAsyncThunk('link/getAllLinkList', async () => {
  const { data } = await axios.get(`links`, {
    headers: { 'include-access-token': true },
  })
  return camelcaseKeys(data, { deep: true })
})

export const postLink = createAsyncThunk<Link, { url: string; folderId: number }>(
  'link/postLink',
  async ({ url, folderId }) => {
    const { data } = await axios.post(`links`, {
      headers: { 'include-access-token': true },
      url,
      folderId,
    })
    return camelcaseKeys(data, { deep: true })
  },
)

export const deleteLink = createAsyncThunk<null, number>('link/deleteLink', async (linkId) => {
  const { data } = await axios.delete(`links/${linkId}`, {
    headers: { 'include-access-token': true },
  })
  return data
})

export const putFavoriteLink = createAsyncThunk<any, { linkId: number; favorite: boolean }>(
  'link/putFavorite',
  async ({ linkId, favorite }) => {
    const { data } = await axios.put(`links/${linkId}`, {
      headers: { 'include-access-token': true },
      favorite,
    })

    return data
  },
)
