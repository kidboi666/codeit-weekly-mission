import { Dispatch, MouseEvent, SetStateAction } from 'react'
import { DROPDOWN_COMPONENTS, DropDownType } from './DropDownType'

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
    <div onClick={() => setOpen(false)}>
      <div onClick={onClick}>{renderDropDown}</div>
    </div>
  )
}

export default DropDown
