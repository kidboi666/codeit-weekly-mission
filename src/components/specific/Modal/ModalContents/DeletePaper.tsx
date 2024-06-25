import { Button } from '@/src/components'
import { FormEvent } from 'react'
import useFetchHandler from '@/src/hooks/useFetchHandler'
import useDeletePaper from '@/src/services/useFetch/paper/useDeletePaper'

interface DeletePaperProps {
  paperTitle: string
  paperId: number
}
const DeletePaper = ({ paperTitle, paperId }: DeletePaperProps) => {
  const [success, failure] = useFetchHandler()
  const { mutate, isPending } = useDeletePaper()

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    mutate(paperId, {
      onSuccess: () => success('페이퍼가 삭제되었습니다.'),
      onError: (error) => failure(error),
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>페이퍼 삭제하기</h3>
      <h4>{paperTitle}</h4>
      <Button
        variant="deleteLink"
        text="삭제하기"
        width="100%"
        type="submit"
        isPending={isPending}
      />
    </form>
  )
}

export default DeletePaper
