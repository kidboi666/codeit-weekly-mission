import Image from 'next/image'
import checkicon from '@/public/icons/check.svg'
import React, { Dispatch, SetStateAction } from 'react'
import * as S from './ColorOption.styled'

interface ColorOptionProps {
  background: string
  formBody: string
  setFormBody: Dispatch<SetStateAction<any>>
}

const ColorOption = ({ background, formBody, setFormBody }: ColorOptionProps) => {
  const isActive = formBody === background

  const onChangeActive = () => {
    setFormBody(background)
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
      <div>
        <Image src={checkicon} alt="체크 이미지" width={20} height={20} />
      </div>
    </S.ColorOptionLayout>
  )
}

export default ColorOption
