import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from '@/src/services/axiosInstance'

const useChangeFolderName = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (newFolder: { name: string; id: number }) => {
      return axios.put(`folders/${newFolder.id}`, { name: newFolder.name })
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['folders'] }),
  })
}

export default useChangeFolderName
