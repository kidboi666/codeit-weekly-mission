import axios from '@/src/services/axiosInstance'
import camelcaseKeys from 'camelcase-keys'

export const postLink = async ({ url, folderId }: { url: string; folderId: number }) => {
  const { data } = await axios.post(`links`, {
    headers: { 'include-access-token': true },
    url,
    folderId,
  })
  return camelcaseKeys(data, { deep: true })
}

export const deleteLink = async (linkId: number) => {
  return axios.delete(`links/${linkId}`)
}
