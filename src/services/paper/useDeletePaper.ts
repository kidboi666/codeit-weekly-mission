import { useMutation, useQueryClient } from '@tanstack/react-query'
import { paperInstance } from '@/src/services/axiosInstance'

const useDeletePaper = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (paperId: number) => paperInstance.delete(`paper/${paperId}`),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['papers'] }),
  })
}

export default useDeletePaper
