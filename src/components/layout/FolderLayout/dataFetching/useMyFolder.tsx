import { useQuery } from '@tanstack/react-query'
import { getFolder } from '@/src/services/folder'

const useMyFolder = () => {
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

export default useMyFolder
