import { useAppDispatch, useAppSelector } from "@/hooks/useApp";
import * as S from "./AccountInfo.styled";
import { logout } from "@/redux/reducers/auth";
import { closeDropDown } from "@/redux/reducers/dropDown";

const AccountInfo = () => {
  const { imageSource, name, email } = useAppSelector((state) => state.auth.userInfo);
  const dispatch = useAppDispatch();

  const onClick = () => {
    dispatch(logout());
    dispatch(closeDropDown());
  };
  return (
    <S.AccountInfoLayout>
      <S.InfoSection>
        <img src={imageSource} alt={"프로필 이미지"} />
        <div>
          <p>{name}</p>
          <p>{email}</p>
        </div>
      </S.InfoSection>
      <S.MenuList>
        <li>
          <div onClick={onClick}>
            <span>⎋</span>
            로그아웃
          </div>
        </li>
      </S.MenuList>
    </S.AccountInfoLayout>
  );
};

export default AccountInfo;
