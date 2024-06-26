import { InputHTMLAttributes, useEffect, useState } from 'react'
import { Eye } from '@/src/components'
import { FieldError, FieldValues } from 'react-hook-form'
import * as S from './AuthInput.styled'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: string
  width?: string
  error?: FieldError
  field: FieldValues
}

const Input = ({
  variant,
  width = '100%',
  type,
  error,
  placeholder,
  className,
  field,
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
        width={width}
        type={transforemedType}
        placeholder={placeholder}
        className={className}
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
