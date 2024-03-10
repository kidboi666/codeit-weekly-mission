const $textBox = document.querySelectorAll('.image_description');
const $figcaption = document.querySelectorAll('.figcaption_wrap');
const $imageBox = document.querySelectorAll('.card_image');

// const handleDescription = () => {
//   if (window.innerWidth <= 767) {
//     for (let i = 0; i < $imageBox.length; i++) {
//       $imageBox[i].append($textBox[i]);
//     }
//   } else {
//     for (let j = 0; j < $figcaption.length; j++) {
//       $figcaption[j].append($textBox[j]);
//     }
//   }
// };

const handleNavShadow = () => {
  const $nav = document.querySelector('.header_nav');
  if (window.scrollY > 30) {
    $nav.classList.add('nav_shadow');
    return;
  }
  $nav.classList.remove('nav_shadow');
};

// handleDescription();
window.addEventListener('resize', handleDescription);
window.addEventListener('scroll', handleNavShadow);
