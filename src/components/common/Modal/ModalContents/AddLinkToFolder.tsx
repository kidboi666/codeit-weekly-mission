import { Dispatch, FormEvent, SetStateAction, useState } from 'react'
import { useAppSelector } from '@/src/hooks/useApp'
import { Button } from '@/src/components'
import { FolderList } from '@/src/types'
import useFetchHandler from '@/src/hooks/useFetchHandler'
import usePostLink from '@/src/services/link/usePostLink'
import * as S from './AddLinkToFolder.styled'

interface AddLinkToFolderProps {
  linkUrl: string
  setLinkUrl?: Dispatch<SetStateAction<string>>
  folderList: FolderList[]
  linkId?: number
}

const AddLinkToFolder = ({ linkUrl, setLinkUrl, folderList, linkId = 0 }: AddLinkToFolderProps) => {
  const [selectedFolder, setSelectedFolder] = useState({
    name: '',
    id: 0,
  })
  const { currentFolder } = useAppSelector((state) => state.folder)
  const { isPending, mutate } = usePostLink()
  const [success, failure] = useFetchHandler()

  const handleSelectedFolder = (folderItem: FolderList) => {
    setSelectedFolder({
      name: folderItem.name,
      id: folderItem.id,
    })
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    mutate(
      { url: linkUrl, folderId: selectedFolder.id },
      {
        onSuccess: () => {
          success('링크가 추가되었습니다.')
        },
        onError: (error) => {
          failure(error)
        },
      },
    )
    if (setLinkUrl) setLinkUrl('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>폴더에 복사</h3>
      <S.FolderList>
        {folderList?.map((folder: FolderList) => {
          if (folder.id === currentFolder?.id && linkId) return null
          return (
            <S.FolderListItem
              key={folder.id}
              $isActive={folder.name === selectedFolder.name}
              onClick={() => handleSelectedFolder(folder)}
            >
              <S.ItemName>{folder.name}</S.ItemName>
              <S.ItemLinkCount>{folder.link?.count || '0'}개 링크</S.ItemLinkCount>
              <S.CheckIcon $isActive={folder.name === selectedFolder.name}>✓</S.CheckIcon>
            </S.FolderListItem>
          )
        })}
      </S.FolderList>
      <Button variant="default" text="추가하기" width="100%" type="submit" isPending={isPending} />
    </form>
  )
}

export default AddLinkToFolder
