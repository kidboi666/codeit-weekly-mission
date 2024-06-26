import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from '@/src/services/axiosInstance'

const usePostLink = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (newLink: { url: string; folderId: number }) => axios.post(`links`, newLink),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['links'] }),
  })
}

export default usePostLink
