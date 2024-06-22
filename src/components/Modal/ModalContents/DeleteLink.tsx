import { Button } from '@/src/components'
import { COMBINED_FOLDER_NAME } from '@/src/constants/strings'
import { useAppDispatch, useAppSelector } from '@/src/hooks/useApp'
import { deleteLink, getAllLinkList, getLinkList } from '@/src/store/actions/link'
import { closeModal } from '@/src/store/reducers/modal'
import { openToast } from '@/src/store/reducers/toast'
import { ModalProps } from '../ModalTypes'

const DeleteLink = ({ title, text, variant }: ModalProps) => {
  const { linkId, linkTitle } = useAppSelector((state) => state.modal.props) || {}
  const { currentFolder } = useAppSelector((state) => state.folder)
  const dispatch = useAppDispatch()

  const onClick = async () => {
    if (linkId) {
      await dispatch(deleteLink(linkId))
      dispatch(closeModal())
      dispatch(openToast({ type: 'deleteLink' }))
      if (currentFolder.name === COMBINED_FOLDER_NAME) {
        await dispatch(getAllLinkList())
      } else {
        await dispatch(getLinkList(Number(currentFolder.id)))
      }
    }
  }

  return (
    <>
      <h3>{title}</h3>
      <h4>{linkTitle}</h4>
      <Button variant={variant} text={text} width="100%" onClick={onClick} />
    </>
  )
}

export default DeleteLink
