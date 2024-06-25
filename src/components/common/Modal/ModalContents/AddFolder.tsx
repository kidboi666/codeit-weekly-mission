import { Button, Input } from '@/src/components'
import { postFolder } from '@/src/services/folder'
import { FormEvent } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import useFetchHandler from '@/src/hooks/useFetchHandler'
import useInput from '@/src/hooks/useInput'

const AddFolder = () => {
  const [folderName, onChangeFolderName] = useInput('')
  const queryClient = useQueryClient()
  const [success, failure] = useFetchHandler()

  const AddFolderMutation = useMutation({
    mutationFn: (newFolder: string) => postFolder(newFolder),
    onSuccess: () => {
      queryClient.invalidateQueries()
    },
  })

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
        onChange={onChangeFolderName}
        placeholder="생성할 폴더 이름"
        width="100%"
      />
      <Button variant="default" text="추가하기" type="submit" width="100%" />
    </form>
  )
}

export default AddFolder
