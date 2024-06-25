import { useQuery } from '@tanstack/react-query'
import { paperInstance } from '@/src/services/axiosInstance'
import camelcaseKeys from 'camelcase-keys'

const useGetPaper = () => {
  const getPaper = async () => {
    const { data } = await paperInstance.get(`paper`)
    return camelcaseKeys(data.data, { deep: true })
  }

  const {
    data: paperList,
    isPending: paperPending,
    error: paperError,
  } = useQuery({
    queryKey: ['papers'],
    queryFn: getPaper,
  })

  return [paperList, paperPending, paperError]
}

export default useGetPaper
