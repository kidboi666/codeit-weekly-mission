import React from 'react'
import { COMBINED_FOLDER_NAME } from '@/src/constants/strings'
import { FolderOptionButton, Button } from '@/src/components'
import { useAppDispatch, useAppSelector } from '@/src/hooks/useApp'
import { openModal } from '@/src/store/reducers/modal'
import { FolderList } from '@/src/types'
import { setCurrentFolder } from '@/src/store/reducers/folder'
import AddFolder from '@/src/components/common/Modal/ModalContents/AddFolder'
import { useRouter } from 'next/router'
import * as S from './Folder.styled'

interface FolderProps {
  folderList: FolderList[]
}

const Folder = ({ folderList }: FolderProps) => {
  const dispatch = useAppDispatch()
  const { currentFolder } = useAppSelector((state) => state.folder)
  const router = useRouter()

  const handleClickAllFolder = () => {
    dispatch(setCurrentFolder({ name: COMBINED_FOLDER_NAME, id: 0 }))
    router.push(`/folder`, undefined, { shallow: true })
  }

  const handleClickFolder = (folder: FolderList) => {
    dispatch(setCurrentFolder({ name: folder.name, id: folder.id }))
    router.push(`/folder/${folder.id}`, undefined, { shallow: true })
  }

  const handleClickPaper = () => {
    dispatch(setCurrentFolder({ name: '페이퍼📝', id: 1 }))
    router.push(`/paper`, undefined, { shallow: true })
  }

  return (
    <S.FolderLayout>
      <S.FolderContainer>
        <S.FolderBox>
          <Button
            variant="folderButton"
            onClick={handleClickAllFolder}
            text={COMBINED_FOLDER_NAME}
            selected={currentFolder?.name}
          />
          {folderList?.map((folder: FolderList) => (
            <Button
              key={folder.id}
              variant="folderButton"
              onClick={() => handleClickFolder(folder)}
              text={folder.name}
              selected={currentFolder?.name}
            />
          ))}
          <div onClick={() => dispatch(openModal(<AddFolder />))}>
            <Button variant="addFolder" text="폴더 추가 +" />
          </div>
          <Button
            variant="paperButton"
            text="페이퍼📝"
            onClick={handleClickPaper}
            selected={currentFolder.name}
          />
        </S.FolderBox>
      </S.FolderContainer>
      <FolderOptionButton />
    </S.FolderLayout>
  )
}

export default Folder
