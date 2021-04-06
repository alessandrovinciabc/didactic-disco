let isThereAMobileMenu = () => {
  if (document.querySelector('.MobileMenu')) return true;
  else return false;
};

let getAllMenus = () => {
  return document.querySelectorAll('.MobileMenu');
};

document.addEventListener('click', function (e) {
  if (e.target.classList.contains('MobileMenu__button')) {
    e.target.parentNode.classList.toggle('MobileMenu--expanded');
  }
});

export default {};
