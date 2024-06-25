import { useAppDispatch, useAppSelector } from '@/src/hooks/useApp'
import { useEffect, useState } from 'react'
import { closeModal } from '@/src/store/reducers/modal'
import * as S from './Modal.styled'

const Modal = () => {
  const { modalElement, isOpen } = useAppSelector((state) => state.modal)
  const [hasScrollbar, setHasScrollbar] = useState(false)
  const dispatch = useAppDispatch()

  useEffect(() => {
    setHasScrollbar(document.documentElement.scrollHeight > document.documentElement.clientHeight)
  }, [isOpen])

  if (!isOpen) return null

  return (
    <>
      <S.ScrollLock $hasScrollbar={hasScrollbar} />
      <S.ModalLayout onClick={() => dispatch(closeModal())}>
        <S.ModalContainer onClick={(e) => e.stopPropagation()}>
          <S.StyledCloseButton variant="modal" onClick={() => dispatch(closeModal())} />
          {modalElement}
        </S.ModalContainer>
      </S.ModalLayout>
    </>
  )
}

export default Modal
