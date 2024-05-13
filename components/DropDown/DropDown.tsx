import { useAppDispatch, useAppSelector } from "@/hooks/useApp";
import * as S from "./DropDown.styled";
import { closeDropDown } from "@/redux/reducers/dropDown";
import { DROPDOWN_TYPES } from "./DropDownType";

const DropDown = () => {
  const { isOpen, contents } = useAppSelector((state) => state.dropDown);
  const dispatch = useAppDispatch();

  if (!isOpen) return null;

  const findDropDown = DROPDOWN_TYPES.find((dropDown) => {
    if (dropDown.contents.type === contents.type) {
      return dropDown;
    }
  });

  const dropDownRender = () => {
    return findDropDown?.component;
  };

  return (
    <S.Background onClick={() => dispatch(closeDropDown())}>
      <S.DropDownLayout onClick={(e) => e.stopPropagation()}>{dropDownRender()}</S.DropDownLayout>
    </S.Background>
  );
};

export default DropDown;
