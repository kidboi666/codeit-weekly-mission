import { Dispatch, MouseEvent, SetStateAction } from 'react'
import { DROPDOWN_COMPONENTS, DropDownType } from './DropDownType'
import * as S from './DropDown.styled'

interface DropDownProps {
  variant: DropDownType
  props?: Record<string, any>
  isOpen: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
  onClick?: (e: MouseEvent<HTMLDivElement>) => void
}

const DropDown = ({ variant, props, isOpen, setOpen, onClick }: DropDownProps) => {
  const findDropDown = DROPDOWN_COMPONENTS.get(variant)

  if (!isOpen) return null

  const renderDropDown = findDropDown ? findDropDown({ ...props }) : ''

  return (
    <S.DropdownContainer onClick={() => setOpen(false)}>
      <div onClick={onClick}>{renderDropDown}</div>
    </S.DropdownContainer>
  )
}

export default DropDown
