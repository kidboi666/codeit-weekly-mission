import { useAppDispatch } from '@/src/hooks/useApp'
import { openModal } from '@/src/store/reducers/modal'
import DeleteLink from '@/src/components/common/Modal/ModalContents/DeleteLink'
import AddLinkToFolder from '@/src/components/common/Modal/ModalContents/AddLinkToFolder'
import { FolderList } from '@/src/types'
import * as S from './EditCard.styled'

export interface EditCardProps {
  linkId: number
  linkTitle: string
  linkUrl: string
  folderList: FolderList[]
}

const EditCard = ({ linkId, linkTitle, linkUrl, folderList }: EditCardProps) => {
  const dispatch = useAppDispatch()

  return (
    <S.EditCardLayout>
      <button
        type="button"
        onClick={() => dispatch(openModal(<DeleteLink linkId={linkId} linkTitle={linkTitle} />))}
      >
        삭제하기
      </button>
      <button
        type="button"
        onClick={() =>
          dispatch(
            openModal(
              <AddLinkToFolder linkUrl={linkUrl} linkId={linkId} folderList={folderList} />,
            ),
          )
        }
      >
        폴더에 복사
      </button>
    </S.EditCardLayout>
  )
}

export default EditCard
