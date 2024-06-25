import { Button } from '@/src/components'
import { deletePaper } from '@/src/services/paper'
import { useMutation } from '@tanstack/react-query'
import { FormEvent } from 'react'
import useFetchHandler from '@/src/hooks/useFetchHandler'

interface DeletePaperProps {
  paperTitle: string
  paperId: number
}
const DeletePaper = ({ paperTitle, paperId }: DeletePaperProps) => {
  const [success, failure] = useFetchHandler()
  const deletePaperMutation = useMutation({
    mutationFn: (paperId: number) => deletePaper(paperId),
  })

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      deletePaperMutation.mutate(paperId)
      success('페이퍼가 삭제되었습니다.')
    } catch (err) {
      failure(err)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>페이퍼 삭제하기</h3>
      <h4>{paperTitle}</h4>
      <Button variant="deleteLink" text="삭제하기" width="100%" type="submit" />
    </form>
  )
}

export default DeletePaper
