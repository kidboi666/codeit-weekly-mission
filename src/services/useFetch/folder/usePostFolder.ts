import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from '@/src/services/axiosInstance'

const usePostFolder = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (name: string) => axios.post(`folders`, { name }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['folders'] }),
  })
}

export default usePostFolder
