import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from '@/src/services/axiosInstance'

const useDeleteLink = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (linkId: number) => axios.delete(`links/${linkId}`),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['links'] }),
  })
}

export default useDeleteLink
