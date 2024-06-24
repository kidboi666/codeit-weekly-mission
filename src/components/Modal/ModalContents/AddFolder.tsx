import { Button, Input } from '@/src/components'
import { postFolder } from '@/src/services/folder'
import { ChangeEvent, FormEvent, useState } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import useHandleFetch from '@/src/hooks/useHandleFetch'

const AddFolder = () => {
  const [folderName, setFolderName] = useState('')
  const queryClient = useQueryClient()
  const [success, failure] = useHandleFetch()

  const AddFolderMutation = useMutation({
    mutationFn: (newFolder: string) => postFolder(newFolder),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['folders'] })
    },
  })

  const onChangeInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    setFolderName(e.target.value)
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (folderName) {
      try {
        AddFolderMutation.mutate(folderName)
        success('폴더를 추가하였습니다')
      } catch (error) {
        failure(error)
      }
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>폴더 추가</h3>
      <Input
        value={folderName}
        onChange={onChangeInputValue}
        placeholder="생성할 폴더 이름"
        width="100%"
      />
      <Button variant="default" text="추가하기" type="submit" width="100%" />
    </form>
  )
}

export default AddFolder
