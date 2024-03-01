const $textBox = document.querySelectorAll('.image_description');
const $imageBox = document.querySelectorAll('.figure_image');

const handleDescription = () => {
  for (let i = 0; i < $imageBox.length; i++) {
    $imageBox[i].append($textBox[i]);
  }
};

const handleNavShadow = () => {
  const $nav = document.querySelector('.header_nav');
  if (window.scrollY > 30) {
    $nav.classList.add('nav_shadow');
    return;
  }
  $nav.classList.remove('nav_shadow');
};

handleDescription();
window.addEventListener('scroll', handleNavShadow);
