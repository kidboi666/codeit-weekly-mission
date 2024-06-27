import { FormEvent } from 'react'
import Image from 'next/image'
import LinkIcon from '@/public/icons/link.svg'
import { Button, Input } from '@/src/components'
import AddLinkToFolder from '@/src/components/common/Modal/ModalContents/AddLinkToFolder'
import useInput from '@/src/hooks/useInput'
import { useAppDispatch } from '@/src/hooks/useApp'
import { openModal } from '@/src/store/reducers/modal'
import { openToast } from '@/src/store/reducers/toast'
import { FolderList } from '@/src/types'
import * as S from './AddLink.styled'

interface AddLinkProps {
  className?: string
  folderList: FolderList[]
}

const AddLink = ({ className, folderList }: AddLinkProps) => {
  const [linkUrl, onChangeLinkUrl, setLinkUrl] = useInput<string>('')
  const dispatch = useAppDispatch()

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (folderList.length === 0) {
      dispatch(openToast({ text: '폴더를 먼저 만들어야 합니다!', warn: true }))
    } else if (linkUrl) {
      dispatch(
        openModal(
          <AddLinkToFolder linkUrl={linkUrl} setLinkUrl={setLinkUrl} folderList={folderList} />,
        ),
      )
    } else {
      dispatch(openToast({ text: '주소를 입력하세요', warn: true }))
    }
  }

  return (
    <S.AddLinkLayout className={className}>
      <S.FormBox onSubmit={handleSubmit}>
        <S.InnerBox>
          <S.IconImgBox>
            <Image src={LinkIcon} alt="" />
          </S.IconImgBox>
          <Input
            value={linkUrl}
            onChange={onChangeLinkUrl}
            placeholder="링크를 추가해 보세요"
            variant="addLink"
          />
          <Button variant="addLink" text="추가하기" type="submit" />
        </S.InnerBox>
      </S.FormBox>
    </S.AddLinkLayout>
  )
}

export default AddLink
