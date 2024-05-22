import * as S from "./DropDown.styled";
import { DROPDOWN_COMPONENTS, DropDownType } from "./DropDownType";

interface DropDownProps {
  variant: DropDownType;
  props?: Record<string, any>;
  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const DropDown = ({ variant, props, isOpen, setOpen }: DropDownProps) => {
  const findDropDown = DROPDOWN_COMPONENTS.get(variant);

  if (!isOpen) return null;

  const renderDropDown = findDropDown ? findDropDown({ ...props }) : "";

  return (
    <S.Background onClick={() => setOpen(false)}>
      <S.DropDownLayout onClick={(e) => e.stopPropagation()}>{renderDropDown}</S.DropDownLayout>
    </S.Background>
  );
};

export default DropDown;
