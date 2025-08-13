const menuBtn = document.querySelector('.menu__btn');
const menuList = document.querySelector('.header__inner-menu');
const menuShadow = document.querySelector('.menu--close');
const body = document.body;

menuBtn.addEventListener('click',()=>{
  menuList.classList.toggle('header__inner-menu--open');
  menuShadow.classList.toggle('menu--open');
  body.classList.toggle('no-scroll');
});
menuShadow.addEventListener('click', function(event) {
    if (event.target === menuShadow) {
      menuList.classList.remove('header__inner-menu--open');
      menuShadow.classList.remove('menu--open');
      body.classList.remove('no-scroll');
    }
});