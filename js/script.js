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
  menu.classList.toggle('open');
})
const iconSwap = document.getElementById('menu-icon');
iconSwap.addEventListener('click', function (){
  if(this.classList.contains('fa-bars')){
    this.classList.replace('fa-bars', 'fa-times');
  } else {
    this.classList.replace('fa-times', 'fa-bars');
  };
});