import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import * as S from './Nav.styled';
import UserLoggedIn from './UserLoggedIn';
import logo from '../../assets/icons/logo.svg';

const Nav = () => {
  const [isShadow, setShadow] = useState(false);
  const { pathname } = useLocation();

  const handleNavigation = () => {
    setTimeout(() => {
      if (window.scrollY > 30) {
        setShadow(true);
        return;
      }

      setShadow(false);
    }, 100);
  };

  useEffect(() => {
    const isFolderPage = pathname === '/folder';
    if (isFolderPage) return;
    window.addEventListener('scroll', handleNavigation);
    return () => {
      window.removeEventListener('scroll', handleNavigation);
    };
  }, [pathname]);

  return (
    <S.HeaderLayout $isShadow={isShadow}>
      <S.LogoBox>
        <Link to='/'>
          <img src={logo} alt='Linkbrary' />
        </Link>
      </S.LogoBox>
      <UserLoggedIn />
    </S.HeaderLayout>
  );
};

export default Nav;
