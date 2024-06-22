import React, { useState } from 'react'
import kebobIcon from '@/public/icons/kebab.svg'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { COMBINED_FOLDER_NAME } from '@/src/constants/strings'
import { DropDown } from '@/src/components'
import { useAppSelector } from '@/src/hooks/useApp'
import * as S from './Kebab.styled'

interface KebabProps {
  linkId: number
  linkTitle: string
  linkUrl: string
}

const Kebab = ({ linkId, linkTitle, linkUrl }: KebabProps) => {
  const router = useRouter()
  const [isOpen, setOpen] = useState(false)
  const { currentFolder } = useAppSelector((state) => state.folder)

  if (!router.pathname.includes('/folder') || currentFolder?.name === COMBINED_FOLDER_NAME) {
    return null
  }

  const onClickKebab = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault()
    setOpen((prev) => !prev)
  }

  return (
    <S.KebabLayout onClick={onClickKebab} onMouseLeave={() => setOpen(false)}>
      <Image src={kebobIcon} alt="케밥 버튼 아이콘" style={{ width: '100%' }} />
      <DropDown
        variant="editCard"
        isOpen={isOpen}
        setOpen={setOpen}
        onClick={onClickKebab}
        props={{ linkId, linkTitle, linkUrl }}
      />
    </S.KebabLayout>
  )
}

export default Kebab
