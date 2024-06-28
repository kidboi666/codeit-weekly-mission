import { useQuery } from '@tanstack/react-query'
import { paperInstance } from '@/src/services/axiosInstance'
import camelcaseKeys from 'camelcase-keys'
import { PAGE_LIMIT } from '@/src/constants/number'

const useGetPaper = (page: number) => {
  const getPaper = async (page = 1, limit = 1) => {
    const { data } = await paperInstance.get(`paper?page=${page}&limit=${limit}`)
    return camelcaseKeys(data, { deep: true })
  }

  return useQuery({
    queryKey: ['papers', page],
    queryFn: () => getPaper(page, PAGE_LIMIT),
  })
}

export default useGetPaper
