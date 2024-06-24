import { useAppDispatch } from '@/src/hooks/useApp'
import { closeModal } from '@/src/store/reducers/modal'
import { openToast } from '@/src/store/reducers/toast'

const useHandleFetch = () => {
  const dispatch = useAppDispatch()

  const handleSuccess = (toastMessage: string) => {
    dispatch(closeModal())
    dispatch(openToast(toastMessage))
  }

  const handleError = (toastMessage: Error | string) => {
    dispatch(closeModal())
    if (toastMessage instanceof Error) {
      // eslint-disable-next-line no-console
      console.log(toastMessage)
    } else {
      dispatch(openToast(toastMessage))
    }
  }

  return [handleSuccess, handleError]
}

export default useHandleFetch
