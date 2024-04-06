import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import * as S from './Nav.style';
import UserLoggedIn from './UserLoggedIn';
import logo from '../../assets/icons/logo.svg';

const Nav = () => {
  const [navFixedStatus, setNavFixedStatus] = useState(true);
  const navRef = useRef();
  const { pathname } = useLocation();

  const currentPageIsFolderPage = () => {
    const isFolderPage = pathname === '/folder';
    setNavFixedStatus(isFolderPage);
    window.scrollTo(0, 0);
  };

  const handleNavigation = () => {
    if (!navRef.current) return;
    const navNode = navRef.current;

    if (window.scrollY > 30) {
      navNode.classList.add('shadow');
      return;
    }

    navNode.classList.remove('shadow');
  };

  useEffect(() => {
    window.addEventListener('scroll', handleNavigation);
    currentPageIsFolderPage();
    return () => {
      window.addEventListener('scroll', handleNavigation);
    };
  }, [pathname]);

  return (
    <>
      {navFixedStatus ? (
        <S.HeaderLayout>
          <S.LogoBox>
            <Link to="/">
              <img src={logo} alt="Linkbrary" />
            </Link>
          </S.LogoBox>
          <UserLoggedIn />
        </S.HeaderLayout>
      ) : (
        <S.HeaderLayout ref={navRef}>
          <S.LogoBox>
            <Link to="/">
              <img src={logo} alt="Linkbrary" />
            </Link>
          </S.LogoBox>
          <UserLoggedIn />
        </S.HeaderLayout>
      )}
    </>
  );
};

export default Nav;
