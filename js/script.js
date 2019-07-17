const accordion = document.querySelectorAll('.slide-menu .slide-btn');
//MULTIPLT MENU ITEMS OPEN AT A TIME
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





// //SINGLE MENU ITEM OPEN AT AT TIME
// for(let i = 0; i < accordion.length; i++) {
//   accordion[i].addEventListener('click', function() {
//     for(var i = 0; i < accordion.length; i++) {

//     let child = accordion[i].nextElementSibling;

//     if(!this.classList.contains('active') && this === accordion[i]){
//       this.classList.add('active');
//       child.style.maxHeight = child.scrollHeight + 'px';
//     } else {
//       this.classList.remove('active');
//       child.style.maxHeight = '0px'
//     }
//   };
//   });
// };

