import { InputHTMLAttributes, useEffect, useState } from 'react'
import { Eye } from '@/src/components'
import { FieldError } from 'react-hook-form'
import * as S from './Input.styled'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: string
  width?: string
  error?: FieldError
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
  error,
  ...field
}: InputProps) => {
  const [isEye, setEye] = useState(false)
  const [transforemedType, setTransformedType] = useState(type)

  const processEye = () => {
    if (type === 'password') {
      setEye(true)
    } else {
      setEye(false)
    }
  }

  const changeInputType = () => {
    if (transforemedType === 'password') {
      setTransformedType('text')
    } else {
      setTransformedType('password')
    }
  }

  useEffect(() => {
    processEye()
  }, [])

  return (
    <>
      <S.Input
        $variant={variant}
        $error={error}
        disabled={disabled}
        width={width}
        value={value}
        name={name}
        type={transforemedType}
        placeholder={placeholder}
        className={className}
        onBlur={onBlur}
        onChange={onChange}
        {...field}
      />
      {isEye && (
        <S.EyeSection>
          <Eye onClick={changeInputType} />
        </S.EyeSection>
      )}
      {error && <S.ErrorMessage>{error.message}</S.ErrorMessage>}
    </>
  )
}

export default Input
