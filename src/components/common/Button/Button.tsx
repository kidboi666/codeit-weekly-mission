import React from 'react'
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
}: ButtonProps) => {
  return (
    <S.Button
      $variant={variant}
      $width={width}
      $isActive={selected === text}
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={className}
    >
      <p>{text}</p>
    </S.Button>
  )
}

export default Button
