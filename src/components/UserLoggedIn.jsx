import * as S from './UserLoggedIn.style';
import { useState, useEffect } from 'react';
import { getUserRequest } from '../api';
import useAsync from '../hooks/useAsync';
import account from '../assets/icons/account.svg';

function UserLoggedIn() {
  const [, , getUserProfile] = useAsync(getUserRequest);
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    image_source: null,
  });

  const getUser = async () => {
    const result = await getUserProfile();
    if (!result) return;

    const { data } = result;
    setProfile(data[0]);
    console.log(data[0]);
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <S.Login>
      {profile.email ? (
        <>
          <img src={profile['image_source']} alt="프로필 이미지" />
          <S.UserProfile href="#">{profile.email}</S.UserProfile>
        </>
      ) : (
        <S.LoginButton href="#">로그인</S.LoginButton>
      )}
    </S.Login>
  );
}

export default UserLoggedIn;
