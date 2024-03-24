import './Header.css';
import logo from '../../assets/icons/logo.svg';
import account from '../../assets/icons/account.svg';
import { useEffect } from 'react';

function Header({ profile, star }) {
  const { name, email, profileImageSource } = profile;

  useEffect(() => {
    const handleNavShadow = () => {
      const $nav = document.querySelector('.header_wrap');
      console.log('추가');
      if (window.scrollY > 30) {
        $nav.classList.add('nav_shadow');
      } else {
        $nav.classList.remove('nav_shadow');
      }
    };
    window.addEventListener('scroll', handleNavShadow);
    return () => {
      window.removeEventListener('scroll', handleNavShadow);
    };
  }, []);
  return (
    <>
      <ul className="header_wrap">
        <li className="logo">
          <img src={logo} alt="Linkbrary" />
        </li>
        <li className="login">
          {email ? (
            <>
              <img src={account} className="profile_img" />
              <a href="#" className="user_profile">
                {email}
              </a>
            </>
          ) : (
            <a href="#" className="login_btn">
              로그인
            </a>
          )}
        </li>
      </ul>

      <ul className="owner_wrap">
        <li className="owner_img_wrap">
          <img src={profileImageSource} className="owner_img" />
        </li>
        <li className="owner_name">
          <p>{name}</p>
        </li>
        <li className="star">{star}</li>
      </ul>
    </>
  );
}

export default Header;
