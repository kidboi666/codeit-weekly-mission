import axios from '@/src/services/axiosInstance'
import camelcaseKeys from 'camelcase-keys'
import { useQuery } from '@tanstack/react-query'

const useGetLink = (folderId: number) => {
  const getAllLinkList = async () => {
    const { data } = await axios.get(`links`, {
      headers: { 'include-access-token': true },
    })
    return camelcaseKeys(data, { deep: true })
  }

  const getLinkList = async (folderId: number) => {
    const { data } = await axios.get(`folders/${folderId ? `${folderId}` : ''}/links`)
    return camelcaseKeys(data, { deep: true })
  }

  return useQuery({
    queryKey: ['links', folderId],
    queryFn: () => {
      if (!folderId) {
        return getAllLinkList()
      }
      return getLinkList(Number(folderId))
    },
    staleTime: 60 * 1000 * 30,
    gcTime: 60 * 1000 * 30,
    refetchOnWindowFocus: false,
  })
}

export default useGetLink
