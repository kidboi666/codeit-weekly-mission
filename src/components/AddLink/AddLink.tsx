import LinkIcon from '@/public/icons/link.svg'
import React, { useState } from 'react'
import Image from 'next/image'
import { Button, Input } from '@/src/components'
import { useAppDispatch, useAppSelector } from '@/src/hooks/useApp'
import { openModal } from '@/src/store/reducers/modal'
import { openToast } from '@/src/store/reducers/toast'
import * as S from './AddLink.styled'

interface AddLinkProps {
  className?: string
}

const AddLink = ({ className }: AddLinkProps) => {
  const [linkUrl, setLinkUrl] = useState('')
  const { data: folderList, currentFolder } = useAppSelector((state) => state.folder)
  const dispatch = useAppDispatch()

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (folderList.length === 0) {
      dispatch(openToast({ type: 'firstAction' }))
    } else if (linkUrl) {
      dispatch(
        openModal({
          type: 'addLinkToFolder',
          props: { linkUrl, setLinkUrl, currentFolder },
        }),
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
