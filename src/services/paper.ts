import { paperInstance } from '@/src/services/axiosInstance'
import { createAsyncThunk } from '@reduxjs/toolkit'
import camelcaseKeys from 'camelcase-keys'

export const getPaper = async () => {
  const { data } = await paperInstance.get(`paper`)

  return camelcaseKeys(data.data, { deep: true })
}

export const deletePaper = createAsyncThunk<any, number>('paper/deletePaper', async (paperId) => {
  await paperInstance.delete(`paper/${paperId}`)
})

export const postPaper = createAsyncThunk<
  any,
  { name: string; title: string; content: string; background: string }
>('paper/postPaper', async ({ name, title, content, background }) => {
  const { data } = await paperInstance.post(`paper`, {
    name,
    title,
    content,
    background,
  })

  return camelcaseKeys(data.data, { deep: true })
})
