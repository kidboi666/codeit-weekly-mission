import { useAppDispatch } from '@/src/hooks/useApp'
import { closeModal } from '@/src/store/reducers/modal'
import { openToast } from '@/src/store/reducers/toast'

type handleFunctionArg = Error | string | unknown

const useFetchHandler = () => {
  const dispatch = useAppDispatch()

  const handleSuccess = (toastMessage: handleFunctionArg) => {
    dispatch(closeModal())
    dispatch(openToast(toastMessage))
  }

  const handleError = (error: handleFunctionArg) => {
    dispatch(closeModal())
    if (error instanceof Error) {
      // eslint-disable-next-line no-console
      console.log(error)
    } else {
      dispatch(openToast(error))
    }
  }

  return [handleSuccess, handleError]
}

export default useFetchHandler
