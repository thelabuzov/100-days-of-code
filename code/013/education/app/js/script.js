const hamburger = document.querySelector('#hamburger');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const fadeElems = document.querySelectorAll('.has-fade');
const swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
        delay: 3000,
    }
});

hamburger.addEventListener('click', function(){
    console.log('click hamburger');

    if(header.classList.contains('open')){
        body.classList.remove('noscroll');
        header.classList.remove('open');
        fadeElems.forEach(function(element){
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        });
    }
    else {
        body.classList.add('noscroll');
        header.classList.add('open');
        fadeElems.forEach(function(element){
            element.classList.remove('fade-out');
            element.classList.add('fade-in');
        });
    }
});
