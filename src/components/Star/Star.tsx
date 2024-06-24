import React from 'react'
import starTrue from '@/public/icons/star_true.svg'
import starFalse from '@/public/icons/star_false.svg'
import useToggle from '@/src/hooks/useToggle'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { useAppDispatch } from '@/src/hooks/useApp'
import { openToast } from '@/src/store/reducers/toast'
import { putFavoriteLink } from '@/src/services/link'
import * as S from './Star.styled'

interface StarProps {
  favorite: boolean
  linkId: number
}

const Star = ({ favorite, linkId }: StarProps) => {
  const [value, toggle] = useToggle(favorite)
  const currentLocation = useRouter()
  const dispatch = useAppDispatch()

  if (currentLocation.pathname.includes('/shared')) {
    return null
  }

  const onClickFavorite = async (e: React.MouseEvent) => {
    e.preventDefault()
    await dispatch(putFavoriteLink({ linkId, favorite: !value }))
    toggle()
    dispatch(openToast({ type: 'pendingTask' }))
  }

  return (
    <S.StarBox onClick={onClickFavorite}>
      <Image src={value ? starTrue : starFalse} alt="즐겨찾기 아이콘" />
    </S.StarBox>
  )
}

export default Star
