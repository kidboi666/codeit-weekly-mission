import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import * as S from './Nav.style';
import UserLoggedIn from './UserLoggedIn';
import logo from '../assets/icons/logo.svg';

function Nav() {
  const navRef = useRef();

  const handleNavShadow = () => {
    const navNode = navRef.current;
    if (window.scrollY > 30) {
      navNode.classList.add('shadow');
    } else {
      navNode.classList.remove('shadow');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleNavShadow);
    return () => {
      window.removeEventListener('scroll', handleNavShadow);
    };
  }, []);

  return (
    <S.Header className="header_wrap" ref={navRef}>
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
