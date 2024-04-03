import * as S from './UserLoggedIn.style';
import { useState, useEffect, useCallback } from 'react';
import { getUserRequest } from '../api';
import useAsync from '../hooks/useAsync';

function UserLoggedIn() {
  const [, , getUserProfile] = useAsync(getUserRequest);
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    image_source: null,
  });

  const getUser = useCallback(async () => {
    const result = await getUserProfile();
    if (!result) return;

    const { data } = result;
    setProfile(data[0]);
  }, [getUserProfile]);

  useEffect(() => {
    getUser();
  }, [getUser]);

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
