import $ from 'jquery'; 

$('.header_navbar-toggle').click(function(e) {
    e.preventDefault();
    $('.header_navbar-menu').toggleClass('is-open');
    $('.header_navbar-toggle').toggleClass('is-open');
})