/* eslint-disable @typescript-eslint/no-unused-vars */
import { useAppDispatch, useAppSelector } from '@/src/hooks/useApp'
import { closeToast } from '@/src/store/reducers/toast'
import { useEffect, useState } from 'react'
import * as S from './Toast.styled'

const Toast = () => {
  const [isVisible, setVisible] = useState(false)
  const { text, warn } = useAppSelector((state) => state.toast)
  const dispatch = useAppDispatch()

  const closeButtonClickHandler = () => {
    dispatch(closeToast())
    setVisible(false)
  }

  useEffect(() => {
    setVisible(true)
    let timer: NodeJS.Timeout
    let visibleTimer: NodeJS.Timeout

    if (text) {
      visibleTimer = setTimeout(() => {
        setVisible(false)
      }, 2700)
      timer = setTimeout(() => {
        closeButtonClickHandler()
      }, 3000)
    }

    return () => {
      clearTimeout(timer)
      clearTimeout(visibleTimer)
    }
  }, [text])

  if (!text) return null

  return (
    <S.ToastLayout $isVisible={isVisible}>
      <S.CheckContainer $backgroundColor={warn}>❕</S.CheckContainer>
      <S.CheckTextBox>{text}</S.CheckTextBox>
      <S.CloseIconButtonBox onClick={closeButtonClickHandler}>✕</S.CloseIconButtonBox>
    </S.ToastLayout>
  )
}

export default Toast
