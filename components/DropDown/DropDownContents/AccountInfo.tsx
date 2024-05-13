import { useAppDispatch, useAppSelector } from "@/hooks/useApp";
import * as S from "./AccountInfo.styled";
import { logout } from "@/redux/reducers/auth";

const AccountInfo = () => {
  const { imageSource, name, email } = useAppSelector((state) => state.auth.userInfo);
  const dispatch = useAppDispatch();

  return (
    <>
      <S.InfoSection>
        <img src={imageSource} alt={"프로필 이미지"} />
        <div>
          <p>{name}</p>
          <p>{email}</p>
        </div>
      </S.InfoSection>
      <S.MenuList>
        <li>
          <div onClick={() => dispatch(logout())}>
            <span>⎋</span>
            로그아웃
          </div>
        </li>
      </S.MenuList>
    </>
  );
};

export default AccountInfo;
