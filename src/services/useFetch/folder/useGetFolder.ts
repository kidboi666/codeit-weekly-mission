import { useQuery } from '@tanstack/react-query'
import axios from '@/src/services/axiosInstance'
import camelcaseKeys from 'camelcase-keys'

const useGetFolder = () => {
  const getFolder = async () => {
    const { data } = await axios.get(`folders`)
    return camelcaseKeys(data, { deep: true })
  }

  const {
    data: folderList,
    isPending: folderPending,
    error: folderError,
  } = useQuery({
    queryKey: ['folders'],
    queryFn: getFolder,
  })

  return [folderList, folderPending, folderError]
}

export default useGetFolder
