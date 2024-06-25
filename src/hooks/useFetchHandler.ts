import { useAppDispatch } from '@/src/hooks/useApp'
import { closeModal } from '@/src/store/reducers/modal'
import { openToast } from '@/src/store/reducers/toast'
import axios from 'axios'

type handleFunctionArg = string | Error
const useFetchHandler = () => {
  const dispatch = useAppDispatch()

  const handleSuccess = (toastMessage: handleFunctionArg) => {
    dispatch(openToast(toastMessage))
    dispatch(closeModal())
  }

  const handleError = (error: handleFunctionArg) => {
    if (axios.isAxiosError(error)) {
      dispatch(openToast(error?.response?.data?.message))
      dispatch(closeModal())
    }
  }

  return [handleSuccess, handleError]
}

export default useFetchHandler
