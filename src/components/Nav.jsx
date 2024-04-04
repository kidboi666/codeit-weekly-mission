import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import * as S from './Nav.style';
import UserLoggedIn from './UserLoggedIn';
import logo from '../assets/icons/logo.svg';

function Nav() {
  const [navFixedStatus, setNavFixedStatus] = useState();
  const navRef = useRef();

  const currentPageIsFolderPage = () => {
    const result = window.location.pathname === '/folder';
    setNavFixedStatus(result);
  };

  const handleNavigation = () => {
    currentPageIsFolderPage();
    console.log(navFixedStatus);

    if (!navRef.current) return;
    const navNode = navRef.current;

    if (window.scrollY > 30) {
      navNode.classList.add('shadow');
    } else {
      navNode.classList.remove('shadow');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleNavigation);
    return () => {
      window.removeEventListener('scroll', handleNavigation);
    };
  }, [navFixedStatus]);

  return (
    <>
      {navFixedStatus ? (
        <S.Header $notFixed>
          <S.Logo>
            <Link to="/">
              <img src={logo} alt="Linkbrary" />
            </Link>
          </S.Logo>
          <UserLoggedIn />
        </S.Header>
      ) : (
        <S.Header className="header_wrap" ref={navRef}>
          <S.Logo>
            <Link to="/">
              <img src={logo} alt="Linkbrary" />
            </Link>
          </S.Logo>
          <UserLoggedIn />
        </S.Header>
      )}
    </>
  );
}

export default Nav;
