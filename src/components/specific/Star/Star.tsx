import React from 'react'
import starTrue from '@/public/icons/star_true.svg'
import starFalse from '@/public/icons/star_false.svg'
import useToggle from '@/src/hooks/useToggle'
import { useRouter } from 'next/router'
import Image from 'next/image'
import usePutFavoriteLink from '@/src/services/link/usePutFavoriteLink'
import useFetchHandler from '@/src/hooks/useFetchHandler'
import { Spinner } from '@/src/components'
import * as S from './Star.styled'

interface StarProps {
  favorite: boolean
  linkId: number
}

const Star = ({ favorite, linkId }: StarProps) => {
  const [value, toggle] = useToggle(favorite)
  const [success, failure] = useFetchHandler()
  const { mutate, isPending } = usePutFavoriteLink()
  const currentLocation = useRouter()

  if (currentLocation.pathname.includes('/shared')) {
    return null
  }

  const handleClickFavoriteStar = async (e: React.MouseEvent) => {
    e.preventDefault()

    if (isPending) return

    mutate(
      { linkId, favorite: !value },
      {
        onSuccess: () => {
          if (value) {
            success('즐겨찾기 삭제완료')
          } else {
            success('즐겨찾기 등록완료')
          }
          toggle()
        },
        onError: (error) => failure(error),
      },
    )
  }

  return (
    <S.StarBox onClick={handleClickFavoriteStar}>
      {isPending ? <Spinner /> : <Image src={value ? starTrue : starFalse} alt="즐겨찾기 아이콘" />}
    </S.StarBox>
  )
}

export default Star
