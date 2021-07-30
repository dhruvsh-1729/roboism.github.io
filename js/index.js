let menuHamburger = document.querySelector('.menu__hamburger');
let mobileMenu = document.querySelector('.mobile-menu');

menuHamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
})