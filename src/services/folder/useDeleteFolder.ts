import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from '@/src/services/axiosInstance'

const useDeleteFolder = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (folderId: number) => axios.delete(`folders/${folderId}`),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['folders'] }),
  })
}

export default useDeleteFolder
