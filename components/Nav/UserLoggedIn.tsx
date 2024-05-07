import * as S from "./UserLoggedIn.styled";
import { useState, useEffect } from "react";
import { getUserRequest } from "@/services/api";
import useAsync from "../../hooks/useAsync";
import { UserData } from "@/services/types";

const UserLoggedIn: React.FC = () => {
  const { requestFunction: getUserProfile } = useAsync(getUserRequest);
  const [profile, setProfile] = useState<UserData>();

  const getUser = async () => {
    const { data } = await getUserProfile();
    if (!data) return null;
    setProfile(data[0]);
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <S.LoginLayout>
      {profile ? (
        <>
          <img src={profile.imageSource} alt='프로필 이미지' />
          <div>{profile.email}</div>
        </>
      ) : (
        <S.LoginButton variant='default' text='로그인' />
      )}
    </S.LoginLayout>
  );
};

export default UserLoggedIn;
