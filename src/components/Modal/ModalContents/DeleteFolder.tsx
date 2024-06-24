import { Button } from '@/src/components'
import { deleteFolder } from '@/src/services/folder'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useAppDispatch, useAppSelector } from '@/src/hooks/useApp'
import { FormEvent } from 'react'
import { closeModal } from '@/src/store/reducers/modal'

const DeleteFolder = () => {
  const { currentFolder } = useAppSelector((state) => state.folder)
  const dispatch = useAppDispatch()
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
      dispatch(closeModal())
    } catch (error) {
      console.log(error)
      dispatch(closeModal())
    }
  }

  return (
    <>
      <h3>폴더 삭제</h3>
      <h4>{currentFolder.name}</h4>
      <form onSubmit={handleSubmit}>
        <Button variant="deleteFolder" text="삭제하기" width="100%" type="submit" />
      </form>
    </>
  )
}

export default DeleteFolder
