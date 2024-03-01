const handleNavShadow = () => {
  const $nav = document.querySelector('.header_nav');
  if (window.scrollY > 30) {
    $nav.classList.add('nav_shadow');
    return;
  }
  $nav.classList.remove('nav_shadow');
};

window.addEventListener('scroll', handleNavShadow);
// export default scrollNavShadow;
