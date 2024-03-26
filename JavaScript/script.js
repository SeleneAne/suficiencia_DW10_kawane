const hamburgerMenu = document.querySelector('.hamburgue');
const navMenu = document.querySelector('.nav-menu');

let isOpen = false;

hamburgerMenu.addEventListener('click', function() {
  isOpen = !isOpen;

  if (isOpen) {
    navMenu.style.left = '0';
  } else {
    navMenu.style.left = '-100%';
  }
});

//cursos//

const accordions = document.querySelectorAll('.accordion');

accordions.forEach(accordion => {
    accordion.addEventListener('click', () => {
        const body = accordion.querySelector('.accordion-body');
        body.classList.toggle('active');
    })
})
