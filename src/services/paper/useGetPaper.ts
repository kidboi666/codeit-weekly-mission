import { useQuery } from '@tanstack/react-query'
import { paperInstance } from '@/src/services/axiosInstance'
import camelcaseKeys from 'camelcase-keys'

const useGetPaper = () => {
  const getPaper = async () => {
    const { data } = await paperInstance.get(`paper`)
    return camelcaseKeys(data.data, { deep: true })
  }

  return useQuery({
    queryKey: ['papers'],
    queryFn: getPaper,
    staleTime: 60 * 1000 * 30,
    gcTime: 60 * 1000 * 5,
    refetchOnWindowFocus: false,
  })
}

export default useGetPaper
