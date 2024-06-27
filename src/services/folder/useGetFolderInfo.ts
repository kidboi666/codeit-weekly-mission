import { useQuery } from '@tanstack/react-query'
import axios from '@/src/services/axiosInstance'
import camelcaseKeys from 'camelcase-keys'

const useGetFolderInfo = (folderId: number) => {
  const getFolderInfo = async (folderId: number) => {
    const { data } = await axios.get(`folders/${folderId}`)
    return camelcaseKeys(data, { deep: true })
  }

  return useQuery({
    queryKey: ['folder', folderId],
    queryFn: () => getFolderInfo(folderId),
    staleTime: 60 * 1000 * 30,
    gcTime: 60 * 1000 * 30,
    refetchOnWindowFocus: false,
  })
}

export default useGetFolderInfo
