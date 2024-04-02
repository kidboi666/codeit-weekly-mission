import * as S from './UserLoggedIn.style';
import { useState, useEffect } from 'react';
import { getMockUser } from '../api';
import useAsync from '../hooks/useAsync';
import account from '../assets/icons/account.svg';

function UserLoggedIn() {
  const [, , getUserProfile] = useAsync(getMockUser);
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    profileImageSource: null,
  });

  // 샘플 유저 api 리퀘스트
  const getUser = async () => {
    const result = await getUserProfile();
    if (!result) return;

    setProfile(result);
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <S.Login>
      {profile.email ? (
        <>
          <img src={account} alt="프로필 이미지" />
          <S.UserProfile href="#">{profile.email}</S.UserProfile>
        </>
      ) : (
        <S.LoginButton href="#">로그인</S.LoginButton>
      )}
    </S.Login>
  );
}

export default UserLoggedIn;
