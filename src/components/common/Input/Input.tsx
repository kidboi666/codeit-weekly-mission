import { InputHTMLAttributes } from 'react'
import { FieldError } from 'react-hook-form'
import * as S from './Input.styled'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: string
  width?: string
}

const Input = ({
  variant,
  width = '100%',
  value,
  name,
  type,
  placeholder,
  className,
  disabled,
  onBlur,
  onChange,
}: InputProps) => {
  return (
    <S.Input
      $variant={variant}
      disabled={disabled}
      width={width}
      value={value}
      name={name}
      type={type}
      placeholder={placeholder}
      className={className}
      onBlur={onBlur}
      onChange={onChange}
    />
  )
}

export default Input
