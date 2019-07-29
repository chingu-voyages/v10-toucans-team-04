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
  const bodyScroll = document.getElementById('body'); 
  
  menu.classList.toggle('open');

  navLogo.forEach((e) => {
    e.classList.toggle('nav-logo-active');
  } );

  if(menu.classList.contains('open')){
    iconSwapActive.src = 'img/icon-close.svg';
    bodyScroll.classList.add('lock-scroll');  
  } else {
    iconSwapActive.src = 'img/icon-hamburger.svg';
    bodyScroll.classList.remove('lock-scroll');
  }
});
