document.querySelector('.button-nav').addEventListener('click', function(){
    document.querySelector('.nav-mobile').classList.toggle('nav-mobile--active');
 });

 // Вызов карусели
$(document).ready(function(){
    $("#slider-gifts").owlCarousel({
        items: 1,
        dots: false,
        margin: 40,
        loop: true
    });
  });