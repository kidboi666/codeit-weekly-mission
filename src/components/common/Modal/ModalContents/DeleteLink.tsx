import { FormEvent } from 'react'
import useFetchHandler from '@/src/hooks/useFetchHandler'
import { Button } from '@/src/components'
import useDeleteLink from '@/src/services/link/useDeleteLink'

interface DeleteLinkProps {
  linkId: number
  linkTitle: string
}

const DeleteLink = ({ linkId, linkTitle }: DeleteLinkProps) => {
  const [success, failure] = useFetchHandler()
  const { mutate, isPending } = useDeleteLink()

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    mutate(linkId, {
      onSuccess: () => success('링크를 삭제하였습니다.'),
      onError: (error) => failure(error),
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>폴더 공유</h3>
      <h4>{linkTitle}</h4>
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

export default DeleteLink
