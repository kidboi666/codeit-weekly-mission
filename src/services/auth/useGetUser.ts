import { useQuery } from '@tanstack/react-query'
import axios from '@/src/services/axiosInstance'
import camelcaseKeys from 'camelcase-keys'

const useGetUser = (userId: number) => {
  const getUser = async (userId: number) => {
    const { data } = await axios.get(`users/${userId}`)
    return camelcaseKeys(data, { deep: true })
  }

  return useQuery({
    retryOnMount: true,
    queryKey: ['user', userId],
    queryFn: () => getUser(userId),
    retry: 0,
    staleTime: 60 * 1000 * 30,
    gcTime: 60 * 1000 * 5,
    refetchOnWindowFocus: false,
    enabled: !!userId,
  })
}

export default useGetUser
