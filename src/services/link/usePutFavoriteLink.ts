import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from '@/src/services/axiosInstance'

const usePutFavoriteLink = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ linkId, favorite }: { linkId: number; favorite: boolean }) =>
      axios.put(`links/${linkId}`, { favorite }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['links'] }),
  })
}

export default usePutFavoriteLink
