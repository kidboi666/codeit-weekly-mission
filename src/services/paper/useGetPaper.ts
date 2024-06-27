import { useQuery } from '@tanstack/react-query'
import { paperInstance } from '@/src/services/axiosInstance'
import camelcaseKeys from 'camelcase-keys'

const useGetPaper = () => {
  const getPaper = async () => {
    const { data } = await paperInstance.get(`paper`)
    return camelcaseKeys(data, { deep: true })
  }

  return useQuery({
    queryKey: ['papers'],
    queryFn: getPaper,
  })
}

export default useGetPaper
