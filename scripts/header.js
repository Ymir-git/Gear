const menuBtn = document.querySelector('.menu__btn');
const menuList = document.querySelector('.header__inner-menu');

menuBtn.addEventListener('click',()=>{
  menuList.classList.toggle('header__inner-menu--open');
});
