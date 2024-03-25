import './Nav.css';
import logo from '../assets/icons/logo.svg';
import { useEffect } from 'react';
import IsUserLoggedIn from '../utils/IsUserLoggedIn';

function Nav() {
  useEffect(() => {
    const handleNavShadow = () => {
      const $nav = document.querySelector('.header_wrap');
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
    <ul className="header_wrap">
      <li className="logo">
        <img src={logo} alt="Linkbrary" />
      </li>
      <IsUserLoggedIn />
    </ul>
  );
}

export default Nav;
