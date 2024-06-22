import Image from 'next/image'
import checkicon from '@/public/icons/check.svg'
import React, { Dispatch, SetStateAction } from 'react'
import * as S from './ColorOption.styled'

interface ColorOptionProps {
  background: string
  formBody: {
    title: string
    content: string
    background: string
  }
  setFormBody: Dispatch<SetStateAction<any>>
}

const ColorOption = ({ background, formBody, setFormBody }: ColorOptionProps) => {
  const isActive = formBody.background === background

  const onChangeActive = () => {
    setFormBody({
      ...formBody,
      background,
    })
  }

  const changeColor = (color: string) => {
    return `var(--${color}-color)`
  }

  return (
    <S.ColorOptionLayout
      $background={changeColor(background)}
      $isActive={isActive}
      onClick={onChangeActive}
    >
      <S.IconBox>
        <Image fill src={checkicon} alt="체크 이미지" />
      </S.IconBox>
    </S.ColorOptionLayout>
  )
}

export default ColorOption
