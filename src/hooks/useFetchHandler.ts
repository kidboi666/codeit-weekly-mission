import { useAppDispatch } from '@/src/hooks/useApp'
import { closeModal } from '@/src/store/reducers/modal'
import { openToast } from '@/src/store/reducers/toast'
import axios from 'axios'

type handleFunctionArg = string | Error

const useFetchHandler = () => {
  const dispatch = useAppDispatch()

  const handleSuccess = (toastMessage: handleFunctionArg) => {
    dispatch(openToast({ text: toastMessage }))
    dispatch(closeModal())
  }

  const handleError = (error: handleFunctionArg) => {
    if (axios.isAxiosError(error)) {
      dispatch(openToast({ text: error?.response?.data?.message, warn: true }))
      dispatch(closeModal())
    } else {
      dispatch(openToast({ text: error, warn: true }))
    }
  }

  return [handleSuccess, handleError]
}

export default useFetchHandler
