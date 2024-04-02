import './Nav.css';
import logo from '../assets/icons/logo.svg';
import { useEffect } from 'react';
import UserLoggedIn from './UserLoggedIn';

function Nav() {
  const handleNavShadow = () => {
    const $nav = document.querySelector('.header_wrap');
    if (window.scrollY > 30) {
      $nav.classList.add('nav_shadow');
    } else {
      $nav.classList.remove('nav_shadow');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleNavShadow);
    return () => {
      window.removeEventListener('scroll', handleNavShadow);
    };
  }, []);

  return (
    <header className="header_wrap">
      <div className="logo">
        <img src={logo} alt="Linkbrary" />
      </div>
      <UserLoggedIn />
    </header>
  );
}

export default Nav;
