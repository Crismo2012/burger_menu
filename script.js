let burger = document.querySelector('.burger-menu');
let nav = document.querySelector('.nav');
let navList = document.querySelector('.nav__list');
burger.addEventListener('click', function() {
    burger.classList.toggle('active');
    nav.classList.toggle('active');
    navList.classList.toggle('active');
    console.log('this works')
});

