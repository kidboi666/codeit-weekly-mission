import { useAppDispatch } from '@/src/hooks/useApp'
import { openModal } from '@/src/store/reducers/modal'
import * as S from './EditCard.styled'

export interface EditCardProps {
  linkId?: number
  linkTitle?: string
  linkUrl?: string
}

const EditCard = ({ linkId, linkTitle, linkUrl }: EditCardProps) => {
  const dispatch = useAppDispatch()

  const deleteLink = () => {
    dispatch(
      openModal({
        type: 'deleteLink',
        props: { linkId, linkTitle },
      }),
    )
  }

  const addLinkToFolder = () => {
    dispatch(
      openModal({
        type: 'addLinkToFolder',
        props: { linkId, linkUrl },
      }),
    )
  }

  return (
    <S.EditCardLayout>
      <button type="button" onClick={deleteLink}>
        삭제하기
      </button>
      <button type="button" onClick={addLinkToFolder}>
        폴더 이동
      </button>
    </S.EditCardLayout>
  )
}

export default EditCard
