import { useAppSelector } from '@/src/hooks/useApp'
import { Button } from '@/src/components'
import { FolderList } from '@/src/types'
import { FormEvent, useState } from 'react'
import { postLink } from '@/src/services/link'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import useFetchHandler from '@/src/hooks/useFetchHandler'
import * as S from './AddLinkToFolder.styled'

interface AddLinkToFolderProps {
  linkUrl: string
  setLinkUrl?: (linkUrl: string) => void
  folderList?: FolderList[]
  linkId?: number
}

const AddLinkToFolder = ({ linkUrl, setLinkUrl, folderList, linkId = 0 }: AddLinkToFolderProps) => {
  const { currentFolder } = useAppSelector((state) => state.folder)
  const [selectedFolder, setSelectedFolder] = useState({
    name: '',
    id: 0,
  })
  const [handleSuccess, handleError] = useFetchHandler()
  const queryClient = useQueryClient()
  const postLinkMutation = useMutation({
    mutationFn: (newLink: { url: string; folderId: number }) => postLink(newLink),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['links'] })
    },
  })

  const handleSelectedFolder = (folderItem: FolderList) => {
    setSelectedFolder({
      name: folderItem.name,
      id: folderItem.id,
    })
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      postLinkMutation.mutate({ url: linkUrl, folderId: selectedFolder.id })
      handleSuccess('링크가 추가되었습니다.')
      if (setLinkUrl) setLinkUrl('')
    } catch (err) {
      handleError(err)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>폴더 이동</h3>
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
      <Button variant="default" text="추가하기" width="100%" type="submit" />
    </form>
  )
}

export default AddLinkToFolder
