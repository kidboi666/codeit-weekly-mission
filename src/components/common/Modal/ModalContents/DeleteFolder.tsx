import { Button } from '@/src/components'
import { deleteFolder } from '@/src/services/folder'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useAppSelector } from '@/src/hooks/useApp'
import { FormEvent } from 'react'
import useFetchHandler from '@/src/hooks/useFetchHandler'

const DeleteFolder = () => {
  const { currentFolder } = useAppSelector((state) => state.folder)
  const [success, failure] = useFetchHandler()
  const queryClient = useQueryClient()

  const deleteFolderMutation = useMutation({
    mutationFn: (deleteFolderId: number) => deleteFolder(deleteFolderId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['folders'] })
    },
  })

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      deleteFolderMutation.mutate(currentFolder.id)
      success('폴더를 삭제하였습니다.')
    } catch (error) {
      failure(error)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>폴더 삭제</h3>
      <h4>{currentFolder.name}</h4>
      <Button variant="deleteFolder" text="삭제하기" width="100%" type="submit" />
    </form>
  )
}

export default DeleteFolder
