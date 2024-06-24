import { useAppDispatch, useAppSelector } from '@/src/hooks/useApp'
import { Button } from '@/src/components/'
import { FolderList } from '@/src/types'
import { closeModal } from '@/src/store/reducers/modal'
import { openToast } from '@/src/store/reducers/toast'
import { useEffect, useState } from 'react'
import { getFolder } from '@/src/services/folder'
import { COMBINED_FOLDER_NAME } from '@/src/constants/strings'
import { deleteLink, getAllLinkList, getLinkList, postLink } from '@/src/services/link'
import * as S from './AddLinkToFolder.styled'
import { ModalProps } from '../ModalTypes'

const AddLinkToFolder = ({ title, text, variant }: ModalProps) => {
  const [selectedFolder, setSelectedFolder] = useState({
    name: '',
    id: 0,
  })
  const { data: folderList, currentFolder } = useAppSelector((state) => state.folder)
  const { linkUrl, setLinkUrl } = useAppSelector((state) => state.modal.props) || {}
  const { linkId } = useAppSelector((state) => state.modal.props) || {}
  const dispatch = useAppDispatch()

  const handleSelectedFolder = (folderItem: FolderList) => {
    setSelectedFolder({
      name: folderItem.name,
      id: folderItem.id,
    })
  }

  const refreshLinkList = () => {
    if (currentFolder.name === COMBINED_FOLDER_NAME) {
      // 현재 보여지는 폴더가 전체 폴더일때 새로고침
      dispatch(getAllLinkList())
    } else if (selectedFolder.name === currentFolder.name) {
      // 현재 보여지는 폴더에 링크 추가시 새로고침
      dispatch(getLinkList(selectedFolder.id))
    } else if (linkId) {
      // 폴더 이동시 새로고침
      dispatch(getLinkList(currentFolder.id))
    }
  }

  const handleLinkAddition = async () => {
    const res = await dispatch(postLink({ url: linkUrl, folderId: selectedFolder.id }))
    dispatch(closeModal())
    if (res.meta.requestStatus === 'rejected') {
      return dispatch(openToast({ type: 'rejectedAddLink' }))
    }
    setLinkUrl('')
    dispatch(openToast({ type: 'addLink' }))
    return refreshLinkList()
  }

  const handleLinkMove = async () => {
    await dispatch(postLink({ url: linkUrl, folderId: selectedFolder.id }))
    await dispatch(deleteLink(linkId))
    dispatch(closeModal())
    dispatch(openToast({ type: 'moveLink' }))
    refreshLinkList()
  }

  const onClickAddLink = () => {
    if (linkId) {
      handleLinkMove()
    } else {
      handleLinkAddition()
    }
  }

  useEffect(() => {
    dispatch(getFolder())
  }, [])

  return (
    <>
      <h3>{title}</h3>
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
      <Button variant={variant} text={text} width="100%" onClick={onClickAddLink} />
    </>
  )
}

export default AddLinkToFolder
