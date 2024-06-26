import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from '@/src/services/axiosInstance'

const usePostFavoriteLink = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (link: { linkId: number; favorite: boolean }) =>
      axios.put(`links/${link.linkId}`, { favorite: link.favorite }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['links'] }),
  })
}

export default usePostFavoriteLink
