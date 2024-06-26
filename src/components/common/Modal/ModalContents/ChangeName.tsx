import { Button, Input } from '@/src/components'
import { FormEvent } from 'react'
import { useAppSelector } from '@/src/hooks/useApp'
import useFetchHandler from '@/src/hooks/useFetchHandler'
import useChangeFolderName from '@/src/services/folder/useChangeFolderName'
import useInput from '@/src/hooks/useInput'

const ChangeName = () => {
  const { currentFolder } = useAppSelector((state) => state.folder)
  const [newName, onChangeNewName] = useInput('')
  const [success, failure] = useFetchHandler()
  const { mutate, isPending } = useChangeFolderName()

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    mutate(
      { name: newName, id: currentFolder.id },
      {
        onSuccess: () => success('폴더 이름이 변경되었습니다.'),
        onError: (error) => failure(error),
      },
    )
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>폴더 이름 변경</h3>
      <Input value={newName} onChange={onChangeNewName} placeholder={currentFolder.name} />
      <Button variant="default" text="변경하기" type="submit" width="100%" isPending={isPending} />
    </form>
  )
}

export default ChangeName
