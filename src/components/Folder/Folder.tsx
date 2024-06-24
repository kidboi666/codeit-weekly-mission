import React from 'react'
import { COMBINED_FOLDER_NAME } from '@/src/constants/strings'
import { FolderOptionButton, Button } from '@/src/components'
import { useAppDispatch, useAppSelector } from '@/src/hooks/useApp'
import { openModal } from '@/src/store/reducers/modal'
import { FolderList } from '@/src/types'
import { setCurrentFolder } from '@/src/store/reducers/folder'
import AddFolder from '@/src/components/Modal/ModalContents/AddFolder'
import Link from 'next/link'
import * as S from './Folder.styled'

interface FolderProps {
  folderList: FolderList[]
}

const Folder = ({ folderList }: FolderProps) => {
  const dispatch = useAppDispatch()
  const { currentFolder } = useAppSelector((state) => state.folder)

  return (
    <S.FolderLayout>
      <S.FolderContainer>
        <S.FolderBox>
          <Link href="/folder">
            <Button
              variant="folderButton"
              onClick={() => dispatch(setCurrentFolder({ name: COMBINED_FOLDER_NAME, id: 0 }))}
              text={COMBINED_FOLDER_NAME}
              selected={currentFolder?.name}
            />
          </Link>
          {folderList?.map((folder: FolderList) => (
            <Link href={`/folder/${folder.id}`} key={folder.id}>
              <Button
                variant="folderButton"
                onClick={() => dispatch(setCurrentFolder({ name: folder.name, id: folder.id }))}
                text={folder.name}
                selected={currentFolder?.name}
              />
            </Link>
          ))}
          <div onClick={() => dispatch(openModal(<AddFolder />))}>
            <Button variant="addFolder" text="폴더 추가 +" />
          </div>
          <Button
            variant="paperButton"
            text="페이퍼📝"
            onClick={() => dispatch(setCurrentFolder({ name: '페이퍼📝', id: 1 }))}
            selected={currentFolder.name}
          />
        </S.FolderBox>
      </S.FolderContainer>
      <FolderOptionButton />
    </S.FolderLayout>
  )
}

export default Folder
