import * as S from "./UserLoggedIn.styled";
import { useState, useEffect, useCallback } from "react";
import { getUserRequest } from "../../api";
import useAsync from "../../hooks/useAsync";
import { UserData } from "../../api/types";

const UserLoggedIn = () => {
  const { requestFunction: getUserProfile } = useAsync(getUserRequest);
  const [profile, setProfile] = useState<UserData>();

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
    <S.LoginLayout>
      {profile ? (
        <>
          <img
            src={profile.imageSource}
            alt='프로필 이미지'
          />
          <div>{profile.email}</div>
        </>
      ) : (
        <S.LoginButton
          variant='default'
          text='로그인'
        />
      )}
    </S.LoginLayout>
  );
};

export default UserLoggedIn;
