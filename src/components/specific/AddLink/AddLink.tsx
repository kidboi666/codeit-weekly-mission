import LinkIcon from '@/public/icons/link.svg'
import React, { useState } from 'react'
import Image from 'next/image'
import { Button, Input } from '@/src/components'
import { useAppDispatch } from '@/src/hooks/useApp'
import { openModal } from '@/src/store/reducers/modal'
import { openToast } from '@/src/store/reducers/toast'
import AddLinkToFolder from '@/src/components/common/Modal/ModalContents/AddLinkToFolder'
import { FolderList } from '@/src/types'
import * as S from './AddLink.styled'

interface AddLinkProps {
  className?: string
  folderList: FolderList[]
}

const AddLink = ({ className, folderList }: AddLinkProps) => {
  const [linkUrl, setLinkUrl] = useState('')
  const dispatch = useAppDispatch()

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (folderList.length === 0) {
      dispatch(openToast('폴더를 먼저 만들어야 합니다!'))
    } else if (linkUrl) {
      dispatch(
        openModal(
          <AddLinkToFolder linkUrl={linkUrl} setLinkUrl={setLinkUrl} folderList={folderList} />,
        ),
      )
    } else {
      dispatch(openToast({ type: 'nothingValue' }))
    }
  }

  const onChangeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLinkUrl(e.target.value)
  }

  return (
    <S.AddLinkLayout className={className}>
      <S.FormBox onSubmit={onSubmit}>
        <S.InnerBox>
          <S.IconImgBox>
            <Image src={LinkIcon} alt="" />
          </S.IconImgBox>
          <Input
            value={linkUrl}
            onChange={onChangeInputValue}
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
