import { useAppDispatch, useAppSelector } from '@/src/hooks/useApp'
import { Button } from '@/src/components'
import { deletePaper, getPaper } from '@/src/services/paper'
import { openToast } from '@/src/store/reducers/toast'
import { closeModal } from '@/src/store/reducers/modal'
import { ModalProps } from '../ModalTypes'

const DeletePaper = ({ title, text, variant }: ModalProps) => {
  const { paperId, paperTitle } = useAppSelector((state) => state.modal.props) || {}
  const dispatch = useAppDispatch()

  const onClick = async () => {
    await dispatch(deletePaper(paperId))
    dispatch(closeModal())
    dispatch(openToast({ type: 'deletePaper' }))
    await dispatch(getPaper())
  }

  return (
    <>
      <h3>{title}</h3>
      <h4>{paperTitle}</h4>
      <Button variant={variant} text={text} width="100%" onClick={onClick} />
    </>
  )
}

export default DeletePaper
