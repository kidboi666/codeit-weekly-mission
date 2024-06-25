import { Button } from '@/src/components'
import { deleteLink } from '@/src/services/link'
import { useMutation } from '@tanstack/react-query'
import useFetchHandler from '@/src/hooks/useFetchHandler'
import { FormEvent } from 'react'

interface DeleteLinkProps {
  linkId: number
  linkTitle: string
}

const DeleteLink = ({ linkId, linkTitle }: DeleteLinkProps) => {
  const [success, failure] = useFetchHandler()
  const deleteLinkMutation = useMutation({
    mutationFn: (linkId: number) => deleteLink(linkId),
  })

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      deleteLinkMutation.mutate(linkId)
      success('링크를 삭제하였습니다.')
    } catch (err) {
      failure(err)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>폴더 공유</h3>
      <h4>{linkTitle}</h4>
      <Button variant="deleteLink" text="삭제하기" width="100%" type="submit" />
    </form>
  )
}

export default DeleteLink
