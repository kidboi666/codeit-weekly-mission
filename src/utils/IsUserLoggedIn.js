import { useState, useEffect } from 'react';
import { getMockUser } from '../api/api';
import useAsync from '../hooks/useAsync';
import account from '../assets/icons/account.svg';

function IsUserLoggedIn() {
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
    <div className="login">
      {profile.email ? (
        <>
          <img src={account} className="profile_img" />
          <a href="#" className="user_profile">
            {profile.email}
          </a>
        </>
      ) : (
        <a href="#" className="login_btn">
          로그인
        </a>
      )}
    </div>
  );
}

export default IsUserLoggedIn;
