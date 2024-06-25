import { Button, Input } from '@/src/components'
import React, { useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import { useAppSelector } from '@/src/hooks/useApp'
import { putFolder } from '@/src/services/folder'
import useFetchHandler from '@/src/hooks/useFetchHandler'

const ChangeName = () => {
  const [newFolderName, setNewFolderName] = useState('')
  const [success, failure] = useFetchHandler()
  const { currentFolder } = useAppSelector((state) => state.folder)
  const putFolderMutation = useMutation({
    mutationFn: (folderName: string) => putFolder({ folderName, folderId: currentFolder.id }),
  })

  const onChangeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewFolderName(e.target.value)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      putFolderMutation.mutate(newFolderName)
      success('폴더 이름이 변경되었습니다.')
    } catch (err) {
      failure(err)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>폴더 이름 변경</h3>
      <Input value={newFolderName} onChange={onChangeInputValue} placeholder={currentFolder.name} />
      <Button variant="default" text="변경하기" type="submit" width="100%" />
    </form>
  )
}

export default ChangeName
