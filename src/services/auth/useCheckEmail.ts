import { useMutation } from '@tanstack/react-query'
import axios from '@/src/services/axiosInstance'

const useCheckEmail = () => {
  return useMutation({
    mutationFn: (email: string) =>
      axios.post(
        `users/check-email`,
        { email },
        {
          headers: { 'exclude-access-token': true },
        },
      ),
  })
}

export default useCheckEmail
