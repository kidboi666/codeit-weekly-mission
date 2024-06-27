import { useQuery } from '@tanstack/react-query'
import axios from '@/src/services/axiosInstance'
import camelcaseKeys from 'camelcase-keys'

const useGetFolder = () => {
  const getFolder = async () => {
    const { data } = await axios.get(`folders`)
    return camelcaseKeys(data, { deep: true })
  }

  return useQuery({
    queryKey: ['folders'],
    queryFn: getFolder,
    staleTime: 60 * 1000 * 30,
    gcTime: 60 * 1000 * 30,
    refetchOnWindowFocus: false,
  })
}

export default useGetFolder
