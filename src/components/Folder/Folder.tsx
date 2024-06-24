import React from 'react'
import { COMBINED_FOLDER_NAME } from '@/src/constants/strings'
import { FolderOptionButton, Button } from '@/src/components'
import { useAppDispatch, useAppSelector } from '@/src/hooks/useApp'
import { openModal } from '@/src/store/reducers/modal'
import { useRouter } from 'next/router'
import { FolderList } from '@/src/types'
import { setCurrentFolder } from '@/src/store/reducers/folder'
import * as S from './Folder.styled'

interface FolderProps {
  folderList: FolderList[]
  isPending: boolean
  error: Error | null
}

const Folder = ({ folderList, error, isPending }: FolderProps) => {
  const dispatch = useAppDispatch()
  const { currentFolder } = useAppSelector((state) => state.folder)
  const router = useRouter()

  const selectFolder = (folderName: string, folderId: number) => {
    dispatch(setCurrentFolder({ name: folderName, id: folderId }))
    router.push(`/folder/${folderId}`, undefined, { shallow: true })
  }

  const selectCombinedFolder = () => {
    dispatch(setCurrentFolder({ name: COMBINED_FOLDER_NAME, id: 0 }))
    router.push(`/folder`, undefined, { shallow: true })
  }

  const selectPaper = () => {
    dispatch(setCurrentFolder({ name: '페이퍼📝', id: 1 }))
    router.push(`/paper`, undefined, { shallow: true })
  }

  return (
    <S.FolderLayout>
      <S.FolderContainer>
        <S.FolderBox>
          <Button
            variant="folderButton"
            onClick={() => selectCombinedFolder()}
            text={COMBINED_FOLDER_NAME}
            selected={currentFolder?.name}
          />
          {folderList?.map((folder: FolderList) => (
            <Button
              key={folder.id}
              variant="folderButton"
              onClick={() => selectFolder(folder.name, folder.id)}
              text={folder.name}
              selected={currentFolder?.name}
            />
          ))}
          <div onClick={() => dispatch(openModal({ type: 'addFolder' }))}>
            <Button variant="addFolder" text="폴더 추가 +" />
          </div>
          <Button
            variant="paperButton"
            text="페이퍼📝"
            onClick={() => selectPaper()}
            selected={currentFolder.name}
          />
        </S.FolderBox>
      </S.FolderContainer>
      <FolderOptionButton />
    </S.FolderLayout>
  )
}

export default Folder
