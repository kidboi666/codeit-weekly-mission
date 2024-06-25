import { useMutation, useQueryClient } from '@tanstack/react-query'
import { paperInstance } from '@/src/services/axiosInstance'

const usePostPaper = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (newPaper: {
      name: string
      title: string
      content: string
      background: string
    }) => {
      return paperInstance.post(`paper`, newPaper)
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['papers'] }),
  })
}

export default usePostPaper
