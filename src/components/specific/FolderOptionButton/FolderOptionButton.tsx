import { useRouter } from 'next/router'
import React from 'react'
import Image from 'next/image'
import shareIcon from '@/public/icons/share.svg'
import penIcon from '@/public/icons/pen.svg'
import deleteIcon from '@/public/icons/delete.svg'
import { useAppDispatch, useAppSelector } from '@/src/hooks/useApp'
import { openModal } from '@/src/store/reducers/modal'
import DeleteFolder from '@/src/components/common/Modal/ModalContents/DeleteFolder'
import PaperForm from '@/src/components/common/Modal/ModalContents/PaperForm'
import ShareFolder from '@/src/components/common/Modal/ModalContents/ShareFolder'
import ChangeName from '@/src/components/common/Modal/ModalContents/ChangeName'
import * as S from './FolderOptionButton.styled'

const FolderOptionButton = () => {
  const { currentFolder } = useAppSelector((state) => state.folder)
  const dispatch = useAppDispatch()
  const router = useRouter()
  const { folderId } = router.query

  return (
    <S.FolderOptionButtonLayout>
      <S.SelectedFolder>{currentFolder?.name}</S.SelectedFolder>
      {folderId && Number(folderId) > 1 && (
        <S.OptionContainer>
          <S.OptionBox onClick={() => dispatch(openModal(<ShareFolder />))}>
            <Image src={shareIcon} alt="공유버튼" width={18} height={18} />
            공유
          </S.OptionBox>
          <S.OptionBox onClick={() => dispatch(openModal(<ChangeName />))}>
            <Image src={penIcon} alt="이름변경버튼" width={18} height={18} />
            이름 변경
          </S.OptionBox>
          <S.OptionBox onClick={() => dispatch(openModal(<DeleteFolder />))}>
            <Image src={deleteIcon} alt="삭제버튼" width={18} height={18} />
            삭제
          </S.OptionBox>
        </S.OptionContainer>
      )}
      {currentFolder.id === 1 && (
        <S.OptionContainer>
          <S.OptionBox onClick={() => dispatch(openModal(<PaperForm />))}>✚ 새 글</S.OptionBox>
        </S.OptionContainer>
      )}
    </S.FolderOptionButtonLayout>
  )
}

export default FolderOptionButton
