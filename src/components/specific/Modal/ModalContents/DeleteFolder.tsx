import { Button } from '@/src/components'
import { useAppSelector } from '@/src/hooks/useApp'
import { FormEvent } from 'react'
import useFetchHandler from '@/src/hooks/useFetchHandler'
import { useRouter } from 'next/router'
import useDeleteFolder from '@/src/services/useFetch/folder/useDeleteFolder'

const DeleteFolder = () => {
  const { currentFolder } = useAppSelector((state) => state.folder)
  const [success, failure] = useFetchHandler()
  const { mutate, isPending } = useDeleteFolder()
  const router = useRouter()

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    mutate(currentFolder.id, {
      onSuccess: () => {
        success('폴더를 삭제하였습니다.')
        router.push('/folder', undefined, { shallow: false })
      },
      onError: (error) => failure(error),
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>폴더 삭제</h3>
      <h4>{currentFolder.name}</h4>
      <Button
        variant="deleteFolder"
        text="삭제하기"
        width="100%"
        type="submit"
        isPending={isPending}
      />
    </form>
  )
}

export default DeleteFolder
