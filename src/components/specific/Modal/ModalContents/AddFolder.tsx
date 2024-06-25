import { Button, Input } from '@/src/components'
import { FormEvent } from 'react'
import useFetchHandler from '@/src/hooks/useFetchHandler'
import useInput from '@/src/hooks/useInput'
import usePostFolder from '@/src/services/useFetch/folder/usePostFolder'

const AddFolder = () => {
  const [folderName, onChangeFolderName] = useInput('')
  const [success, failure] = useFetchHandler()
  const { mutate, isPending } = usePostFolder()

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (folderName) {
      mutate(folderName, {
        onSuccess: () => {
          success('폴더를 추가하였습니다')
        },
        onError: (error) => {
          failure(error)
        },
      })
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
      <Button variant="default" text="추가하기" type="submit" width="100%" isPending={isPending} />
    </form>
  )
}

export default AddFolder
