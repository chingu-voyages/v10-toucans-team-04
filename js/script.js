//MID-PAGE MENU - MULTIPLE ITEMS OPEN AT A TIME
const accordion = document.querySelectorAll('.slide-menu .slide-btn');
for(let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener('click', function() {
    let child = accordion[i].nextElementSibling;
    if(!this.classList.contains('active')){
      this.classList.add('active');
      child.style.maxHeight = child.scrollHeight + 'px';
    } else {
      this.classList.remove('active');
      child.style.maxHeight = '0px'
    }
  });
};

//MOBILE MENU OVERLAY
const navMenu = document.getElementById('main-menu-toggle');
  navMenu.addEventListener('click', function(){
  const menu = document.getElementById('main-nav');
  const navLogo = document.querySelectorAll('.st0, .st1');
  const iconSwapActive = document.getElementById('menu-icon');
  
  menu.classList.toggle('open');

  navLogo.forEach((e) => {
    e.classList.toggle('nav-logo-active');
  } );

  if(menu.classList.contains('open')){
    console.log('working');
    iconSwapActive.src = 'img/icon-close.svg';  
  } else {
    iconSwapActive.src = 'img/icon-hamburger.svg';
  };
});

// const iconSwap = document.getElementById('menu-icon');
// iconSwap.addEventListener('click', () => {
//   const iconSwapActive = document.getElementById('menu-icon');

//   if(iconSwapActive.classList.contains('fa-bars')){
//     iconSwapActive.classList.replace('fa-bars', 'fa-times');
//   } else {
//     iconSwapActive.classList.replace('fa-times', 'fa-bars');
//   };
// });