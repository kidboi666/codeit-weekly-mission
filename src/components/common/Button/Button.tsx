import React from 'react'
import { Spinner } from '@/src/components'
import { SpinnerSize } from '@/src/components/common/Spinner/Spinner'
import * as S from './Button.styled'

interface ButtonProps {
  variant?: string
  width?: string
  text?: string
  selected?: string | number
  className?: string
  disabled?: boolean
  type?: 'submit' | 'button'
  onClick?: (e: React.MouseEvent) => void
  isPending?: boolean
}

const Button = ({
  variant = 'default',
  width,
  text,
  selected,
  className,
  disabled,
  type = 'button',
  onClick,
  isPending,
}: ButtonProps) => {
  return (
    <S.Button
      $variant={variant}
      $width={width}
      $isActive={selected === text}
      type={type}
      disabled={disabled || isPending}
      onClick={onClick}
      className={className}
    >
      {isPending ? <Spinner size={SpinnerSize.SMALL} /> : text}
    </S.Button>
  )
}

export default Button
