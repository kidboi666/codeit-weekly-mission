import { Button, Input } from '@/src/components'
import { useAppDispatch, useAppSelector } from '@/src/hooks/useApp'
import { postFolder } from '@/src/services/folder'
import { closeModal } from '@/src/store/reducers/modal'
import { openToast } from '@/src/store/reducers/toast'
import { ChangeEvent, FormEvent, useState } from 'react'
import { FolderList } from '@/src/types'
import { ModalProps } from '../ModalTypes'

const AddFolder = ({ title, text, variant }: ModalProps) => {
  const [folderName, setFolderName] = useState('')
  const { data: folderList } = useAppSelector((state) => state.folder)
  const dispatch = useAppDispatch()

  const onChangeInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    setFolderName(e.target.value)
  }

  const checkForDuplicates = () => {
    const result = folderList.some((folder: FolderList) => folder.name === folderName)
    if (result) dispatch(openToast({ type: 'duplicateFolderName' }))
    return result
  }

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (folderName && !checkForDuplicates()) {
      await dispatch(postFolder(folderName))
      dispatch(closeModal())
      dispatch(openToast({ type: 'addFolder' }))
    }
  }

  return (
    <>
      <h3>{title}</h3>
      <form onSubmit={onSubmit}>
        <Input
          value={folderName}
          onChange={onChangeInputValue}
          placeholder="생성할 폴더 이름"
          width="100%"
        />
        <Button variant={variant} text={text} type="submit" width="100%" />
      </form>
    </>
  )
}

export default AddFolder
