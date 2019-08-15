//MID-PAGE MENU - MULTIPLE ITEMS OPEN AT A TIME
const accordion = document.querySelectorAll('.slide-menu .slide-btn');
for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener('click', function() {
    const child = accordion[i].nextElementSibling;
    if (!this.classList.contains('active')) {
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
navMenu.addEventListener('click', function() {
  const menu = document.getElementById('main-nav');
  const navLogo = document.querySelectorAll('.st0, .st1');
  const iconSwapActive = document.getElementById('menu-icon');
  const bodyScroll = document.getElementById('body');

  menu.classList.toggle('open');

  navLogo.forEach((e) => {
    e.classList.toggle('nav-logo-active');
  });

  if (menu.classList.contains('open')) {
    iconSwapActive.src = 'img/icon-close.svg';
    bodyScroll.classList.add('lock-scroll');
  } else {
    iconSwapActive.src = 'img/icon-hamburger.svg';
    bodyScroll.classList.remove('lock-scroll');
  }
});

//FEATURES MENU
const featuresMenu = document.querySelectorAll('.features-nav-list-item');

featuresMenu.forEach((function(element) {
  element.addEventListener('click', function(e) {
    e.preventDefault();
    const active = document.querySelector('.feature-nav-active', '.red-btm-border');
    const activeHeadingImage = document.getElementById('active-feature-image');
    const activeHeading = document.getElementById('active-class-heading');
    const activeText = document.getElementById('active-class-text');
    const str = document.getElementsByTagName('a').innerText;

    active.classList.remove('feature-nav-active', 'red-btm-border');
    this.classList.add('feature-nav-active', 'red-btm-border');
    // if (document.getElementById('search').value === 'search') {
    //   activeHeadingImage.src = 'img/illustration-features-tab-2.svg';
    //   activeHeading.innerHTMl = 'Intelligent Search';
    //   activeText.innerHTML = 'Our powerful search feature will help you find items in no time at all! No need to trawl through all of your bookmarks';

    //   console.log
    // } else if (document.getElementById('share').nodeValue === 'share') {

    // }
  });

}));

//FORM VALIDATION
const inputs = document.querySelectorAll('input, select, textarea');

inputs.forEach((input) => {
  input.addEventListener('invalid', () => {
      input.classList.add('error');
    },
    false
  )
});