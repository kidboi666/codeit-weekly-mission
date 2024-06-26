import { useMutation } from '@tanstack/react-query'
import axios from '@/src/services/axiosInstance'
import { useAppDispatch } from '@/src/hooks/useApp'
import { login } from '@/src/store/reducers/auth'

const useSignUp = () => {
  const dispatch = useAppDispatch()

  return useMutation({
    mutationFn: (account: { email: string; password: string }) =>
      axios.post(`auth/sign-up`, account, {
        headers: { 'exclude-access-token': true },
      }),
    onSuccess: (data) => {
      localStorage.setItem('accessToken', data.data.accessToken)
      localStorage.setItem('refreshToken', data.data.refreshToken)
      dispatch(login())
    },
  })
}

export default useSignUp
