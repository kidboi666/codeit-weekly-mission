import { useAppDispatch, useAppSelector } from "@/hooks/useApp";
import * as S from "./DropDown.styled";
import { logout } from "@/redux/reducers/auth";

const DropDown = () => {
  const { name, email, imageSource } = useAppSelector((state) => state.auth.userInfo);
  const dispatch = useAppDispatch();

  return (
    <S.DropDownLayout>
      <S.InfoSection>
        <img src={imageSource} alt={"프로필 이미지"} />
        <p>
          {name}
          {email}
        </p>
      </S.InfoSection>
      <S.MenuList>
        <li>
          <div onClick={() => dispatch(logout())}>
            <span>⎋</span>
            로그아웃
          </div>
        </li>
      </S.MenuList>
    </S.DropDownLayout>
  );
};

export default DropDown;
