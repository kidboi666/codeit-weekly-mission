// import './Nav.css';
import * as S from './Nav.style';
import logo from '../assets/icons/logo.svg';
import { useEffect } from 'react';
import UserLoggedIn from './UserLoggedIn';
import { Link } from 'react-router-dom';

function Nav() {
  const handleNavShadow = () => {
    const $nav = document.querySelector('.header_wrap');
    if (window.scrollY > 30) {
      $nav.classList.add('shadow');
    } else {
      $nav.classList.remove('shadow');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleNavShadow);
    return () => {
      window.removeEventListener('scroll', handleNavShadow);
    };
  }, []);

  return (
    <S.Header className="header_wrap">
      <S.Logo>
        <Link to="/">
          <img src={logo} alt="Linkbrary" />
        </Link>
      </S.Logo>
      <UserLoggedIn />
    </S.Header>
  );
}

export default Nav;
