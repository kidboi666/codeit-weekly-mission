import axios from '@/src/services/axiosInstance'
import camelcaseKeys from 'camelcase-keys'

export const getLinkList = async (folderId: number) => {
  const { data } = await axios.get(`folders/${folderId ? `${folderId}` : ''}/links`)
  return camelcaseKeys(data, { deep: true })
}

export const getAllLinkList = async () => {
  const { data } = await axios.get(`links`, {
    headers: { 'include-access-token': true },
  })
  return camelcaseKeys(data, { deep: true })
}

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

export const putFavoriteLink = async ({
  linkId,
  favorite,
}: {
  linkId: number
  favorite: boolean
}) => {
  return axios.put(`links/${linkId}`, { favorite })
}
