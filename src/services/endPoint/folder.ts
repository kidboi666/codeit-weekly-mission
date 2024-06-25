import axios from '@/src/services/axiosInstance'
import camelcaseKeys from 'camelcase-keys'

export const getSharedFolder = async (folderId: number) => {
  const { data } = await axios.get(`folders/${folderId}`, {
    headers: { 'exclude-access-token': true },
  })
  return camelcaseKeys(data, { deep: true })
}
export const putFolder = async ({
  folderName,
  folderId,
}: {
  folderName: string
  folderId: number
}) => {
  const { data } = await axios.put(`folders/${folderId}`, { name: folderName })

  return camelcaseKeys(data, { deep: true })
}

export const deleteFolder = async (folderId: number) => {
  return axios.delete(`folders/${folderId}`)
}
